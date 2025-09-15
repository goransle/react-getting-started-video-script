# Quickstart: Using the Unified Video Script

**Date**: 2025-09-15
**Status**: Draft

## Overview
This guide explains how to structure the `video-script.md` file to include both narration and code snippets for the video generation process.

## Script Format

The `video-script.md` file is a standard markdown file with a specific structure. The video generation process parses this file to separate narration (for the voiceover) from code (for the visual code images).

### Basic Structure
A script is composed of segments. A segment is a block of narration text followed by one or more fenced code blocks.

```markdown
This is the narration for the first scene. It will be converted to audio.

` ` `jsx
// This is a code snippet.
// It will be turned into a syntax-highlighted image.
function MyComponent() {
  return <div>Hello, World!</div>;
}
` ` `

This is the narration for the second scene. You can have multiple code
snippets associated with one narration block.

` ` `bash
npm install highcharts @highcharts/react
` ` `

` ` `jsx
import Highcharts from 'highcharts';
import HighchartsReact from '@highcharts/react';
` ` `

Any text that is not in a code block is considered narration.
```

### Rules
1.  **Narration**: Any standard paragraph text is treated as narration.
2.  **Code Snippets**: Code must be enclosed in fenced code blocks (using triple backticks \`\`\`).
3.  **Association**: A code block is always associated with the narration block that *precedes* it.
4.  **Language Identifier**: It is highly recommended to add a language identifier (e.g., `jsx`, `bash`, `json`) after the opening backticks for proper syntax highlighting. If omitted, it will default to `plaintext`.
5.  **Multiple Snippets**: You can have multiple code blocks after a single narration block. They will be processed in the order they appear.

## How it Works
1.  You edit the `video-script.md` file to create your script.
2.  When you run the video generation script (`video-generator/src/main.js`), it will:
    a.  Parse `video-script.md`.
    b.  Extract all narration text and generate a single voiceover audio file.
    c.  Extract all code snippets, generate a syntax-highlighted image for each one, and save them to `video-generator/src/assets/code-images/`.
    d.  The main video sequence logic will then use these generated images in the final video.

This new process replaces the old method of manually creating and referencing component files from the `video-examples` directory.
