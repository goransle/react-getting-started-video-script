# Quickstart: Generating the Audio Preview

This guide explains how to generate an MP3 audio preview from the video script.

## Prerequisites
- Node.js installed on your system.
- The project dependencies installed (`npm install`).

## Steps

1.  **Ensure the script is complete**:
    Make sure the `video-script.md` file in the `src/` directory is complete and saved.

2.  **Run the generation script**:
    Execute the following command from the root of the repository:

    ```bash
    node src/generate-audio.js
    ```

3.  **Find the output**:
    The script will generate an `audio-preview.mp3` file in the root of the repository.

4.  **Listen to the preview**:
    Open `audio-preview.mp3` with any media player to listen to the generated speech. You can use this to check the pacing and flow of the script.
