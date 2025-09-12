# Highcharts React Video Script

This project contains the script and assets for a "Getting Started" video for the Highcharts React wrapper.

## Generating the Preview Video

A script is provided to automatically generate a preview video from the code examples and audio file.

### Prerequisites

- Node.js and npm
- `ffmpeg` must be installed and available in your system's PATH.

### Steps

1.  **Install root dependencies**:
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

4.  **Run the video examples dev server**:
    In a separate terminal, run:
    ```bash
    npm run --prefix video-examples dev
    ```

5.  **Generate the video**:
    In another terminal, run the main generation script:
    ```bash
    node video-generator/src/main.js
    ```

The final video will be saved as `preview-video.mp4` in the root of the project.

## Generating the Voiceover

The voiceover for the video is generated using the [Piper TTS](https://github.com/rhasspy/piper) model, which runs locally. The script uses `uvx` to execute the `piper-tts` Python package, so you do not need to install it manually.

### Prerequisites

- Node.js
- `uvx` (can be installed with `pipx install uvx`)

### Steps

1.  **Download a Voice Model**:
    You need to download a voice model for Piper. A good choice for a standard American English voice is `en_US-lessac-medium`. You will need both the `.onnx` file and the `.onnx.json` file.
    - Download the files from the [Hugging Face repository](https://huggingface.co/rhasspy/piper-voices/tree/main/en/en_US/lessac/medium).

2.  **Place the Model Files**:
    Place the downloaded `.onnx` and `.onnx.json` files in the root directory of this project.

3.  **Generate the Audio**:
    Run the following command from the root of the project:
    ```bash
    node src/generate-audio.js
    ```
    This will create the audio file at `video-generator/src/assets/audio.wav`. This audio file is then used when generating the final video.
