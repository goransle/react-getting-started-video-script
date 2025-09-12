# Quickstart: Generating Audio with a Local TTS Model (Piper)

This guide explains how to set up and run the audio generation script using a local TTS model.

## 1. Prerequisites
- Node.js (v18 or higher) installed.
- A downloaded Piper TTS executable and a voice model.

## 2. Setup
1.  **Download Piper TTS**: Download the Piper executable for your operating system from the official Piper repository on GitHub. Place it in a known location on your system.
2.  **Download a Voice Model**: Download a voice model (a `.onnx` file and a `.json` file). A good one for American English is `en_US-lessac-medium`. Place these files in a known location.
3.  **Update Configuration**: The script will require paths to the Piper executable and the voice model. These will be configured directly in the `generate-audio.js` script.

## 3. Running the Script
The audio generation is handled by the `generate-audio.js` script.

1.  **Navigate to the script directory**:
    ```bash
    cd src
    ```
2.  **Execute the script**:
    ```bash
    node generate-audio.js
    ```
The script will read the `video-script.md`, convert it to speech using the local Piper TTS, and save the output to `video-generator/src/assets/audio.wav`.

## 4. Changing the Voice
To change the voice, you must download a different voice model and update the `modelPath` variable in `generate-audio.js`.
