# Research: Text-to-Speech Library for Video Script Preview

## Decision
We will use the `say.js` library for text-to-speech generation.

## Rationale
- **Simplicity and Ease of Use**: `say.js` provides a very simple, cross-platform API for converting text to speech using the operating system's built-in TTS engine. It requires zero configuration.
- **No External Dependencies**: It does not rely on external services or API keys, making it ideal for a simple, local utility script.
- **Sufficient Quality for Preview**: While the voice quality is dependent on the OS (e.g., Siri on macOS, Windows SAPI on Windows), it is more than adequate for creating a preview to check the flow and timing of the script.

## Alternatives Considered
- **`node-gtts`**: This library uses Google Text-to-Speech, which offers higher quality voices. However, it requires an internet connection and can be slower due to its reliance on a web service. It also has limitations on the length of text that can be processed at once.
- **`elevenlabs`**: Provides very high-quality, realistic voices but is a paid service and requires an API key. This is overkill for a simple preview generation tool.
- **Cloud Provider SDKs (AWS Polly, Google Cloud Text-to-Speech)**: Similar to Eleven Labs, these offer high-quality voices but require setting up cloud accounts, managing credentials, and incurring costs. This adds unnecessary complexity for this project.
