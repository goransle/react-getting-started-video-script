# Research: Choosing a Text-to-Speech (TTS) Service

## Decision
We will use the **Piper TTS** open-source model, run locally, for generating the video voiceover.

## Rationale
Given the issues with the cloud-based API quota and the desire to have a self-contained, cost-free solution, a local open-source TTS model is the best approach.

1.  **Voice Quality**: Piper is a fast, local neural text-to-speech system that offers high-quality, natural-sounding voices. The `en_US-lessac-medium` voice model provides a clear and pleasant standard American accent.
2.  **No External Dependencies**: By running locally, we eliminate reliance on external APIs, network latency, and potential costs or quota issues.
3.  **Performance**: Piper is optimized for performance and can generate audio quickly on local hardware.
4.  **Control**: We have full control over the voice model and generation process.

## Alternatives Considered

### OpenAI Text-to-Speech API
-   **Pros**: Excellent voice quality, simple API.
-   **Cons**: Requires an API key, is subject to quotas and costs, and creates an external dependency. The account associated with the project ran into quota issues.

### Other Local Models (e.g., Coqui TTS)
-   **Pros**: Similar benefits to Piper.
-   **Cons**: Piper is often cited as being one of the easier models to get started with for command-line use and has a good selection of pre-trained voices.

Based on this, Piper TTS is the most robust and practical solution for this project.
