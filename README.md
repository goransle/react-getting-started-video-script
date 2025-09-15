# Highcharts React Video Script

This project contains the script and assets for a "Getting Started" video for Highcharts for React.

## Generating the Preview Video

A script is provided to automatically generate a preview video from the code examples and audio file.

The voiceover for the video is generated using the [Piper TTS](https://github.com/rhasspy/piper) model, which runs locally. The necessary model files are downloaded automatically when you install the project dependencies.

### Prerequisites

- Node.js and npm
- `ffmpeg` must be installed and available in your system's PATH.
- `uvx` (can be installed with `pipx install uvx`)

### Steps

1.  **Install dependencies**:
    Run the following command from the project root. This will also download the required voice model.
    ```bash
    npm install
    ```

2.  **Install dependencies for the code examples**:
    ```bash
    cd video-examples
    npm install
    cd ..
    ```

3.  **Install dependencies for the video generator**:
    ```bash
    cd video-generator
    npm install
    cd ..
    ```

4.  **Generate the voiceover audio**:
    ```bash
    node src/generate-audio.js
    ```
    This will create the audio file at `video-generator/src/assets/audio.wav`.

5.  **Run the video examples dev server**:
    In a separate terminal, run:
    ```bash
    npm run --prefix video-examples dev
    ```

6.  **Generate the video**:
    In another terminal, run the main generation script:
    ```bash
    node video-generator/src/main.js
    ```

The final video will be saved as `video-generator/preview-video.mp4`.
