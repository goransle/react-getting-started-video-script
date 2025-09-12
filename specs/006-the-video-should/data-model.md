# Data Model (Local TTS)

This document outlines the data structures for the local text-to-speech (TTS) generation feature.

## 1. TTS Service Input

This is the data required by the `tts-service.js` module to generate an audio file using a local command-line tool like Piper.

-   **`text`** (string, required): The input text to be converted to speech.
-   **`modelPath`** (string, required): The file path to the pre-trained TTS voice model (e.g., a `.onnx` file).
-   **`outputFile`** (string, required): The absolute path where the generated audio file (as a `.wav`) should be saved.
-   **`piperPath`** (string, required): The file path to the Piper executable.

### Example
```json
{
  "text": "Hello, this is a test of the local text-to-speech service.",
  "modelPath": "/path/to/your/voice/en_US-lessac-medium.onnx",
  "outputFile": "/Users/goranslettemark/hs/react-getting-started-video-script/video-generator/src/assets/audio.wav",
  "piperPath": "/path/to/your/piper/executable/piper"
}
```

## 2. TTS Service Output

The service will not return a complex data structure. It will either:
-   **Succeed**: Write the audio data directly to the `outputFile` path.
-   **Fail**: Throw an error with a descriptive message from the command-line tool's output.
