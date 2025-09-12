# Tasks: Implement a more pleasant voice (Local TTS)

**Input**: Design documents from `/specs/006-the-video-should/`

## Phase 3.1: Setup
- [ ] T001 [P] Uninstall the `openai` and `dotenv` npm packages from the root `package.json`.
- [ ] T002 [P] Create a new file `video-generator/src/tts-service.js` for the local TTS logic.
- [ ] T003 [P] Create a test file `video-generator/src/tts-service.test.js`.

## Phase 3.2: Tests First (TDD)
- [ ] T004 Write a failing test in `video-generator/src/tts-service.test.js` that attempts to generate a short audio clip using a mock of the command-line tool.

## Phase 3.3: Core Implementation
- [ ] T005 Implement the TTS generation logic in `video-generator/src/tts-service.js`. This module will use Node.js's `child_process` to execute the Piper command-line tool. It will take `text`, `modelPath`, `piperPath`, and `outputFile` as arguments.
- [ ] T006 Update `video-generator/src/generate-audio.js` to use the new `tts-service.js`. It will need to be configured with the paths to the Piper executable and the desired voice model.
- [ ] T007 Run the test from T004 and ensure it now passes.

## Phase 3.4: Polish
- [ ] T008 [P] Add comments and JSDoc to `video-generator/src/tts-service.js`.
- [ ] T009 [P] Update the main `README.md` to include instructions on how to download and configure the local TTS model.

## Dependencies
- T001 must be completed before starting other tasks.
- T002 and T003 must be completed before T004.
- T004 (failing test) must be completed before T005.
- T005 must be completed before T006.
- T006 must be completed before T007.
