const { exec } = require('child_process');

/**
 * Generates audio from text using the Piper TTS command-line tool, executed via uvx.
 * @param {object} options - The options for audio generation.
 * @param {string} options.text - The text to convert to speech.
 * @param {string} options.modelPath - The path to the Piper voice model.
 * @param {string} options.outputFile - The path to save the audio file.
 * @param {number} [options.lengthScale] - Phoneme length (speech rate).
 * @param {number} [options.noiseScale] - Generator noise.
 * @param {number} [options.noiseWScale] - Phoneme width noise.
 * @param {number} [options.sentenceSilence] - Seconds of silence after each sentence.
 */
function generateAudio({ text, modelPath, outputFile, lengthScale, noiseScale, noiseWScale, sentenceSilence }) {
  return new Promise((resolve, reject) => {
    const safeModelPath = `"${modelPath}"`;
    const safeOutputFile = `"${outputFile}"`;

    let command = `echo "${text}" | uvx --from piper-tts piper -m ${safeModelPath} -f ${safeOutputFile}`;

    if (lengthScale) command += ` --length-scale ${lengthScale}`;
    if (noiseScale) command += ` --noise-scale ${noiseScale}`;
    if (noiseWScale) command += ` --noise-w-scale ${noiseWScale}`;
    if (sentenceSilence) command += ` --sentence-silence ${sentenceSilence}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing Piper via uvx: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
}

module.exports = { generateAudio };

