# Implementation Plan: Implement a more pleasant voice (Local TTS)

**Branch**: `006-the-video-should` | **Date**: 2025-09-12 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/006-the-video-should/spec.md`

## Summary
The goal is to use a local, open-source text-to-speech (TTS) model to generate a pleasant, clear voiceover with a standard American accent for the video script. This involves integrating a command-line based TTS tool, specifically **Piper**, into the audio generation script.

## Technical Context
**Language/Version**: Node.js (v18+)
**Primary Dependencies**: A local command-line TTS engine. **Piper** will be used.
**Storage**: N/A (audio files are generated and stored temporarily)
**Testing**: A test script will verify that the local TTS command can be executed and generates an audio file.
**Target Platform**: A local machine with the Piper TTS executable and a voice model.
**Project Type**: Single project
**Performance Goals**: N/A
**Constraints**: The generated voice must have a standard American accent. The user will need to download the Piper executable and a voice model.
**Scale/Scope**: The implementation will focus on the `generate-audio.js` script and a new `tts-service.js` module that wraps the Piper CLI.

## Constitution Check
The plan adheres to the constitution. The new audio generation logic will be a self-contained module.

## Project Structure

### Documentation (this feature)
```
specs/006-the-video-should/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (/tasks command)
```

### Source Code (repository root)
```
# Using existing structure
video-generator/
└── src/
    ├── generate-audio.js # To be modified
    └── tts-service.js    # New module for local TTS CLI interaction
```

**Structure Decision**: Use existing project structure and add a new service module for the local TTS.

## Phase 0: Outline & Research
Research has been completed, and the decision is to use the Piper TTS local command-line tool.

## Phase 1: Design & Contracts
1.  **`data-model.md`**: Define the data structures for the local TTS service input (text, voice model path, output file path).
2.  **`quickstart.md`**: Provide instructions for downloading the Piper executable and the required voice model, and how to run the script.

## Phase 2: Task Planning Approach
-   Create tasks for setting up the new `tts-service.js` to wrap the Piper command-line tool.
-   Update `generate-audio.js` to use this new service.
-   Create a test to verify that the command can be executed and an audio file is produced.
-   Remove dependencies on `openai` and `dotenv`.
