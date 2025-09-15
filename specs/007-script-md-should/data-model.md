# Data Model: Video Script Structure

**Date**: 2025-09-15
**Status**: Draft

## Description
This document defines the data structures that will represent the parsed video script. The `video-script.md` file will be parsed into a structured format that separates narration from code snippets, making it easy for the video generation process to consume.

## Data Structures

### `ScriptSegment`
Represents a logical block of the video script, typically a paragraph of narration followed by one or more code snippets that should be displayed while that narration is spoken.

-   **Type**: `Object`
-   **Properties**:
    -   `narration` (`string`): The text content of the narration for this segment. This will be used for generating the voiceover.
    -   `codeSnippets` (`CodeSnippet[]`): An array of code snippets associated with this narration. This will be used for generating the code images.

### `CodeSnippet`
Represents a single fenced code block from the markdown file.

-   **Type**: `Object`
-   **Properties**:
    -   `language` (`string`): The language identifier specified for the code block (e.g., `jsx`, `bash`). Defaults to `plaintext` if not provided.
    -   `code` (`string`): The raw code content within the block.
    -   `filename` (`string`): A generated unique filename for the code image that will be created from this snippet (e.g., `01-intro-0.png`, `02-install-0.png`, `02-install-1.png`).

## Example

Given the following `video-script.md` content:

```markdown
This is the first part of the narration.

` ` `jsx
const a = 1;
` ` `

This is the second part, which has two code blocks.

` ` `bash
npm install highcharts
` ` `

` ` `jsx
import React from 'react';
` ` `
```

The parser will produce an array of `ScriptSegment` objects like this:

```json
[
  {
    "narration": "This is the first part of the narration.",
    "codeSnippets": [
      {
        "language": "jsx",
        "code": "const a = 1;",
        "filename": "segment-0-0.png"
      }
    ]
  },
  {
    "narration": "This is the second part, which has two code blocks.",
    "codeSnippets": [
      {
        "language": "bash",
        "code": "npm install highcharts",
        "filename": "segment-1-0.png"
      },
      {
        "language": "jsx",
        "code": "import React from 'react';",
        "filename": "segment-1-1.png"
      }
    ]
  }
]
```
*(Note: The exact filename generation strategy is an implementation detail, the example above is illustrative)*.
