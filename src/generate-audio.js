const { parseScript } = require('../video-generator/src/parse-script');
const { generateAudio } = require('../video-generator/src/tts-service');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'video-generator', 'src', 'assets', 'audio.wav');

// --- Configuration ---
// TODO: Update this path to point to your downloaded voice model.
// You can find models here: https://huggingface.co/rhasspy/piper-voices/tree/main
const modelPath = path.join(__dirname, '..', 'en_US-lessac-medium.onnx');
// ---------------------

// --- Speech Parameters ---
// Adjust these values to change the characteristics of the generated speech.
const lengthScale = 1.1;   // Speech rate. >1 is slower, <1 is faster.
const noiseScale = 0.667;  // Generator noise (variability).
const noiseWScale = 0.8;   // Phoneme width noise (variability).
const sentenceSilence = 0.2; // Seconds of silence between sentences.
// -------------------------

async function main() {
    const segments = parseScript();
    const text = segments.map(segment => segment.narration).join(' ');

    try {
        console.log('Generating audio with uvx and Piper... This may take a moment.');
        await generateAudio({
            text,
            modelPath,
            outputFile: outputPath,
            lengthScale,
            noiseScale,
            noiseWScale,
            sentenceSilence,
        });
        console.log(`Audio saved to ${outputPath}`);
    } catch (error) {
        console.error('Error generating audio:', error);
    }
}

main();
