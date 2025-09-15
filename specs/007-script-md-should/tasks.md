# Task Breakdown: Embed Code Snippets in Video Script

**Date**: 2025-09-15
**Status**: Not Started

This plan outlines the tasks required to modify the video generation process to parse code snippets directly from the `video-script.md` file.

---

### Task 1: Install Dependencies
-   **Description**: Add the `remark` markdown parsing library to the `video-generator` package.
-   **File(s) to Edit**: `video-generator/package.json`
-   **Command**: `npm install --prefix video-generator remark`
-   **Verification**: `remark` appears in the dependencies.

### Task 2: Create a Script Parsing Module
-   **Description**: Create a new module responsible for reading and parsing the `video-script.md` file. This module will use `remark` to traverse the markdown AST and produce an array of `ScriptSegment` objects as defined in the `data-model.md`.
-   **File(s) to Create**: `video-generator/src/parse-script.js`
-   **File(s) to Create**: `video-generator/src/parse-script.test.js`
-   **Logic**:
    1.  Read `src/video-script.md`.
    2.  Use `remark` to parse it into an AST.
    3.  Iterate through the AST nodes.
    4.  Group consecutive paragraph nodes into a single narration block.
    5.  When a code node is encountered, associate it with the preceding narration block.
    6.  Handle multiple code blocks for a single narration block.
    7.  Return the structured array of `ScriptSegment` objects.
-   **Verification**: Unit tests for `parse-script.js` pass, correctly parsing a sample markdown string into the expected data structure.

### Task 3: Update `generate-audio.js`
-   **Description**: Modify the main audio generation script to use the new parsing module. Instead of reading the raw markdown file and stripping code, it should now use the `narration` property from the parsed script segments.
-   **File(s) to Edit**: `src/generate-audio.js`
-   **Logic**:
    1.  Import the new `parse-script.js` module.
    2.  Call the parser to get the array of `ScriptSegment` objects.
    3.  Concatenate the `narration` property from all segments.
    4.  Pass the concatenated text to the TTS service.
-   **Verification**: The `generate-audio.js` script runs successfully and produces an audio file containing the correct narration.

### Task 4: Update `generate-code-images.js`
-   **Description**: Modify the code image generation script to use the `codeSnippets` from the parsed script segments. This will replace the old logic of reading files from the `video-examples` directory.
-   **File(s) to Edit**: `video-generator/src/generate-code-images.js`
-   **Logic**:
    1.  Import the new `parse-script.js` module.
    2.  Call the parser to get the array of `ScriptSegment` objects.
    3.  Iterate through all `codeSnippets` in all segments.
    4.  For each snippet, use the existing screenshot logic to generate a code image. The filename should be derived from the `filename` property in the `CodeSnippet` object.
-   **Verification**: The script generates the correct number of code images in the `video-generator/src/assets/code-images/` directory.

### Task 5: Update the Main Video Generation Logic
-   **Description**: Update the main video generation script (`main.js`) to use the filenames of the newly generated code images.
-   **File(s) to Edit**: `video-generator/src/main.js`
-   **Logic**:
    1.  The `video-sequence.json` might need to be updated or dynamically generated to reflect the new image filenames. The simplest approach is to have the `generate-code-images.js` script also generate/update the relevant parts of `video-sequence.json`.
-   **Verification**: The final `preview-video.mp4` is generated successfully and contains the correct code images in the correct order.

### Task 6: Update `video-script.md`
-   **Description**: Update the main `video-script.md` to include the code snippets that were previously in separate files.
-   **File(s) to Edit**: `src/video-script.md`
-   **Verification**: The script is updated and the final video is correct.

## Phase 3: Finalization
- [ ] **T008**: Review and verify the final video output.
    - **Description**: Manually play the generated `preview-video.mp4` to ensure all narration and code images are correctly synchronized and match the updated `video-script.md`.
    - **Verification**: The video is correct and ready.
