const { parseScript } = require('./parse-script');
const fs = require('fs');

// Mock fs.readFileSync
jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  readFileSync: jest.fn(),
}));

describe('parseScript', () => {
  it('should parse markdown with a single narration and code block', () => {
    const markdown = `
This is the narration.

\`\`\`jsx
const a = 1;
\`\`\`
`;
    fs.readFileSync.mockReturnValue(markdown);
    const segments = parseScript();
    expect(segments).toHaveLength(1);
    expect(segments[0].narration).toBe('This is the narration.');
    expect(segments[0].codeSnippets).toHaveLength(1);
    expect(segments[0].codeSnippets[0].language).toBe('jsx');
    expect(segments[0].codeSnippets[0].code).toBe('const a = 1;');
  });

  it('should handle multiple code blocks for one narration', () => {
    const markdown = `
Narration for multiple snippets.

\`\`\`bash
npm install
\`\`\`

\`\`\`javascript
console.log('hello');
\`\`\`
`;
    fs.readFileSync.mockReturnValue(markdown);
    const segments = parseScript();
    expect(segments).toHaveLength(1);
    expect(segments[0].narration).toBe('Narration for multiple snippets.');
    expect(segments[0].codeSnippets).toHaveLength(2);
    expect(segments[0].codeSnippets[0].language).toBe('bash');
    expect(segments[0].codeSnippets[1].code).toBe("console.log('hello');");
  });

  it('should default to plaintext when language is not specified', () => {
    const markdown = `
Narration.

\`\`\`
plain text code
\`\`\`
`;
    fs.readFileSync.mockReturnValue(markdown);
    const segments = parseScript();
    expect(segments[0].codeSnippets[0].language).toBe('plaintext');
    expect(segments[0].codeSnippets[0].code).toBe('plain text code');
  });

  it('should handle multiple segments', () => {
    const markdown = `
Segment 1 narration.

\`\`\`jsx
<Component1 />
\`\`\`

Segment 2 narration.

\`\`\`jsx
<Component2 />
\`\`\`
`;
    fs.readFileSync.mockReturnValue(markdown);
    const segments = parseScript();
    expect(segments).toHaveLength(2);
    expect(segments[0].narration).toBe('Segment 1 narration.');
    expect(segments[1].narration).toBe('Segment 2 narration.');
    expect(segments[1].codeSnippets[0].code).toBe('<Component2 />');
  });

  it('should handle segments with no code', () => {
    const markdown = `
Narration with no code.

Another paragraph of narration.
`;
    fs.readFileSync.mockReturnValue(markdown);
    const segments = parseScript();
    expect(segments).toHaveLength(1);
    expect(segments[0].narration).toBe('Narration with no code.\n\nAnother paragraph of narration.');
    expect(segments[0].codeSnippets).toHaveLength(0);
  });
});
