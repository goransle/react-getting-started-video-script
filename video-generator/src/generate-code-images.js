const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs').promises;

const codeImagesDir = path.join(__dirname, 'assets', 'code-images');
const videoExamplesDir = path.resolve(__dirname, '../../video-examples/src');

const filesToCapture = [
  {
    filePath: path.join(videoExamplesDir, 'components', '01-FirstChart.tsx'),
    output: '01-FirstChart.png',
  },
  {
    filePath: path.join(videoExamplesDir, 'components', '02-BasicConfiguration.tsx'),
    output: '02-BasicConfiguration.png',
  },
  {
    filePath: path.join(videoExamplesDir, 'App.tsx'),
    output: '03-App.png',
  }
];

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

  for (const file of filesToCapture) {
    try {
      console.log(`Reading file: ${file.filePath}`);
      const code = await fs.readFile(file.filePath, 'utf-8');

      console.log(`Generating image for: ${file.output}`);
      const html = createHtml(code);
      await page.setContent(html);

      const codeElement = await page.$('pre');
      const outputPath = path.join(codeImagesDir, file.output);
      await codeElement.screenshot({ path: outputPath });

      console.log(`Successfully saved: ${outputPath}`);

    } catch (error) {
      console.error(`Failed to generate image for ${file.filePath}:`, error);
    }
  }

  await browser.close();
  console.log('Code images generated successfully.');
})();
