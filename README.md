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
