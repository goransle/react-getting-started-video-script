const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

function parseScript() {
  const scriptPath = path.join(__dirname, '../../src/video-script.md');
  const markdown = fs.readFileSync(scriptPath, 'utf-8');
  const md = new MarkdownIt();
  const tokens = md.parse(markdown, {});

  const segments = [];
  let currentNarration = [];
  let segmentIndex = 0;

  tokens.forEach((token, index) => {
    if (token.type === 'paragraph_open') {
      const nextToken = tokens[index + 1];
      if (nextToken && nextToken.type === 'inline') {
        currentNarration.push(nextToken.content);
      }
    } else if (token.type === 'fence') {
      if (currentNarration.length > 0) {
        segments.push({
          narration: currentNarration.join('\n\n'),
          codeSnippets: [],
        });
        currentNarration = [];
        segmentIndex++;
      }

      const lastSegment = segments[segments.length - 1];
      if (lastSegment) {
        lastSegment.codeSnippets.push({
          language: token.info || 'plaintext',
          code: token.content.trim(),
          filename: `segment-${segmentIndex - 1}-${lastSegment.codeSnippets.length}.png`
        });
      }
    }
  });

  if (currentNarration.length > 0) {
    segments.push({
      narration: currentNarration.join('\n\n'),
      codeSnippets: [],
    });
  }

  return segments;
}module.exports = { parseScript };
