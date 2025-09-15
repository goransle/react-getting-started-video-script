# Research: Markdown Parsing for Video Script

**Date**: 2025-09-15
**Status**: Completed

## Objective
To select a suitable Node.js library for parsing the `video-script.md` file. The library must be able to distinguish between narrative text and fenced code blocks, and provide a structured representation (like an AST) that allows associating code with the preceding narration.

## Key Requirements
1.  **AST Generation**: Must produce an Abstract Syntax Tree or a similar structured format.
2.  **Node Types**: Must clearly differentiate between paragraphs, code blocks, and other markdown elements.
3.  **Code Block Metadata**: Must provide access to the language identifier of a fenced code block (e.g., `jsx`, `bash`).
4.  **Robustness**: Should handle malformed or unconventional markdown gracefully.
5.  **Ecosystem**: A rich ecosystem with plugins (e.g., for traversing the tree) is highly desirable.

## Investigation

### Option 1: `remark`
- **Description**: `remark` is a popular and powerful markdown processor powered by the unified collective. It parses markdown into a syntax tree (mdast) and can also serialize it back to markdown. It has a vast ecosystem of plugins.
- **Pros**:
    - **Excellent AST**: Produces a well-defined `mdast` (markdown abstract syntax tree).
    - **Rich Plugin Ecosystem**: Numerous plugins for traversing, manipulating, and transforming the tree.
    - **Active Maintenance**: Part of the `unified` collective, which is well-maintained.
    - **Handles Metadata**: Code blocks in the AST include the language and the code content.
- **Cons**:
    - Can have a slightly steeper learning curve due to its plugin-based architecture.

### Option 2: `marked`
- **Description**: A fast and popular markdown parser and compiler. It's known for its speed.
- **Pros**:
    - **Fast**: Generally considered one of the fastest markdown parsers.
    - **Simple API**: Easy to get started with.
- **Cons**:
    - **Less Flexible**: Traditionally, it directly converted markdown to HTML, making it harder to work with an intermediate representation. While newer versions have improved this with extensions, it's not as AST-centric as `remark`.
    - **AST is not the primary focus**: The lexer/parser can be used to get tokens, but it's less of a "first-class" citizen compared to `remark`.

### Option 3: Regular Expressions
- **Description**: Use custom regular expressions to manually parse the file content.
- **Pros**:
    - **No Dependencies**: No external libraries needed.
- **Cons**:
    - **Brittle**: Extremely fragile and prone to breaking with slight variations in the markdown.
    - **Hard to Maintain**: Complex regex is difficult to read, debug, and extend.
    - **Poor Error Handling**: Fails silently or incorrectly on edge cases.
    - **Reinventing the Wheel**: Markdown parsing is a solved problem.

## Decision
**`remark` is the chosen library.**

Its robust AST-first approach is perfectly suited for the task of segmenting the script into narration and code. The ability to traverse the tree of nodes (paragraphs, code blocks, etc.) will make it straightforward to implement the logic of associating code blocks with the preceding narration text. The large plugin ecosystem provides confidence that any future requirements can also be met. While `marked` is fast, its primary use case of direct-to-HTML conversion is not what we need. Regular expressions are not a viable option for this task.
