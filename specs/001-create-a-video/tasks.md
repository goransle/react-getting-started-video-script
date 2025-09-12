# Tasks: Create a "Getting Started" Video Script

**Input**: Design documents from `/Users/goranslettemark/hs/react-getting-started-video-script/specs/001-create-a-video/`
**Prerequisites**: plan.md, research.md, data-model.md, quickstart.md

## Phase 3.1: Setup
- [ ] T001: Initialize a Node.js project in the root directory by creating a `package.json` file and install the `say.js` dependency.

## Phase 3.2: Script Authoring
- [ ] T002: Create the file `src/video-script.md` and write the "Introduction" section as outlined in `data-model.md`.
- [ ] T003: Add the "Installation" section to `src/video-script.md`.
- [ ] T004: Add the "Creating Your First Chart" section to `src/video-script.md`.
- [ ] T005: Add the "Basic Configuration" section to `src/video-script.md`.
- [ ] T006: Add the "Outro" section to `src/video-script.md`.

## Phase 3.3: Tooling
- [ ] T007: Create the script `src/generate-audio.js`. This script should read the content from `src/video-script.md`, parse the textual content, and use `say.js` to generate an `audio-preview.mp3` file in the root directory.

## Phase 3.4: Review
- [ ] T008: Run the audio generation script (`node src/generate-audio.js`) and review the output file `audio-preview.mp3` to ensure the script's content, flow, and timing are correct.

## Dependencies
- T001 must be completed before T007.
- T002-T006 must be completed before T007 and T008.
- T007 must be completed before T008.

## Notes
- All script writing tasks (T002-T006) modify the same file (`src/video-script.md`) and should be executed sequentially.
- The final output is a markdown script and an audio preview, so traditional testing tasks are not applicable. The review task (T008) serves as the final validation.
