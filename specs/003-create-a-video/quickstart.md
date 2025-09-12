# Quickstart: Generating the Video

This guide explains how to set up and run the automated video generation script.

## Prerequisites
- Node.js and npm installed on your system.
- `ffmpeg` installed and available in your system's PATH.

## Steps

1.  **Navigate to the project directory**:
    Open your terminal and change into the `video-generator` directory:
    ```bash
    cd video-generator
    ```

2.  **Install dependencies**:
    Run the following command to install the necessary packages:
    ```bash
    npm install
    ```
    This will also download the Playwright browsers.

3.  **Ensure assets are available**:
    Make sure the `audio-preview.aiff` file exists in the `video-generator/src/assets/` directory. Also, ensure the `video-examples` project is running its development server.

4.  **Run the video generation script**:
    Execute the following command from the `video-generator` directory:
    ```bash
    node src/main.js
    ```

5.  **Find the output**:
    The script will perform all the steps (taking screenshots, generating code images, and combining everything) and output a final video file named `preview-video.mp4` in the `video-generator` directory.
