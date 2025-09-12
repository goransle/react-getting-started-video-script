# Tasks: Automated Video Generation

**Input**: Design documents from `/specs/003-create-a-video/`
**Prerequisites**: plan.md, research.md, data-model.md

## Phase 3.1: Setup
- [ ] T001 Create the directory structure for the video generator project inside `video-generator/`.
- [ ] T002 [P] Initialize a new Node.js project in `video-generator/package.json`.
- [ ] T003 [P] Install dependencies: `playwright`, `fluent-ffmpeg`, `ffmpeg-static`, and `carbon-now-scraper` in `video-generator/package.json`.
- [ ] T004 Copy the `audio-preview.aiff` file to `video-generator/src/assets/audio.aiff`.

## Phase 3.2: Asset Generation
- [ ] T005 Create a Playwright script `video-generator/src/generate-screenshots.js` to take screenshots of the running `video-examples` application.
- [ ] T006 Create a script `video-generator/src/generate-code-images.js` to generate images from the source code files using `carbon-now-scraper`.
- [ ] T007 Run the `generate-screenshots.js` script to populate the `video-generator/src/assets/screenshots` directory.
- [ ] T008 Run the `generate-code-images.js` script to populate the `video-generator/src/assets/code-images` directory.

## Phase 3.3: Core Implementation
- [ ] T009 Create the `video-generator/src/video-sequence.json` file, defining the sequence and duration of each image, based on the `data-model.md`.
- [ ] T010 Create the main video generation script `video-generator/src/main.js`. This script will read `video-sequence.json`, use `fluent-ffmpeg` to combine the specified images, add the audio track, and export the final `preview-video.mp4`.

## Phase 3.4: Polish & Finalization
- [ ] T011 Add progress logging to all scripts (`generate-screenshots.js`, `generate-code-images.js`, `main.js`).
- [ ] T012 Run the complete pipeline by executing `node video-generator/src/main.js` to generate the final video.
- [ ] T013 Update the main `README.md` with instructions on how to generate the video.

## Dependencies
- T001 must be completed before all other tasks.
- T002 and T003 can run in parallel after T001.
- T004 depends on T001.
- T005 and T006 depend on T003.
- T007 depends on T005.
- T008 depends on T006.
- T009 depends on T001.
- T010 depends on T007, T008, and T009.
- T011 can be done after T010 is initially structured.
- T012 depends on all preceding tasks being complete.
- T013 is the final documentation step.
