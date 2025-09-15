const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs').promises;
const { parseScript } = require('./parse-script');

const codeImagesDir = path.join(__dirname, 'assets', 'code-images');

const createHtml = (code) => `
  <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
        body {
          font-family: 'Fira Code', monospace;
          background-color: #1E1E1E;
          color: #D4D4D4;
          padding: 2em;
          font-size: 14px;
        }
        pre {
          white-space: pre-wrap;
        }
      </style>
    </head>
    <body>
      <pre><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
    </body>
  </html>
`;

(async () => {
  console.log('Generating code images with Playwright...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const segments = parseScript();
  const videoSequence = [];

  for (const segment of segments) {
    const scene = {
      narration: segment.narration,
      visuals: []
    };
    for (const snippet of segment.codeSnippets) {
      try {
        console.log(`Generating image for: ${snippet.filename}`);
        const html = createHtml(snippet.code);
        await page.setContent(html);

        const codeElement = await page.$('pre');
        const outputPath = path.join(codeImagesDir, snippet.filename);
        await codeElement.screenshot({ path: outputPath });

        scene.visuals.push({
          type: 'code',
          filename: snippet.filename
        });

        console.log(`Successfully saved: ${outputPath}`);

      } catch (error) {
        console.error(`Failed to generate image for ${snippet.filename}:`, error);
      }
    }
    videoSequence.push(scene);
  }

  const sequencePath = path.join(__dirname, 'video-sequence.json');
  await fs.writeFile(sequencePath, JSON.stringify(videoSequence, null, 2));
  console.log(`Video sequence saved to ${sequencePath}`);

  await browser.close();
  console.log('Code images generated successfully.');
})();
