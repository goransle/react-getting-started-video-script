const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const ffprobe = require('@ffprobe-installer/ffprobe');
const path = require('path');
const fs = require('fs');
const { getAudioDurationInSeconds } = require('get-audio-duration');
const videoSequence = require('./video-sequence.json');

try {
  fs.chmodSync(ffmpegPath, '755');
  fs.chmodSync(ffprobe.path, '755');
} catch (e) {
  console.warn('Could not set executable permissions on ffmpeg/ffprobe binaries. This may be an issue on some systems.');
}

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobe.path);

const outputVideo = path.join(__dirname, '..', 'preview-video.mp4');
const audioInput = path.join(__dirname, 'assets', 'audio.wav');
const tempDir = path.join(__dirname, 'temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

async function main() {
  console.log('Starting video generation...');

  const audioDuration = await getAudioDurationInSeconds(audioInput);
  const totalNarrationChars = videoSequence.reduce((acc, scene) => acc + scene.narration.length, 0);

  const concatFile = path.join(tempDir, 'concat.txt');
  let concatContent = '';

  for (const scene of videoSequence) {
    const sceneRatio = scene.narration.length / totalNarrationChars;
    const sceneDuration = audioDuration * sceneRatio;

    const visuals = scene.visuals.length > 0 ? scene.visuals : [{ type: 'blank' }];
    const durationPerVisual = sceneDuration / visuals.length;

    for (const visual of visuals) {
      const imagePath = visual.type === 'code'
        ? path.join(__dirname, 'assets', 'code-images', visual.filename)
        : path.join(__dirname, 'assets', 'blank.png');

      // On Windows, paths in the concat file need to be escaped.
      const escapedPath = imagePath.replace(/\\/g, '/');
      concatContent += `file '${escapedPath}'\n`;
      concatContent += `duration ${durationPerVisual}\n`;
    }
  }

  // The last image needs to be repeated to fill the duration
  const lastLine = concatContent.trim().split('\n').slice(-2).join('\n');
  concatContent += `${lastLine}\n`;

  fs.writeFileSync(concatFile, concatContent);

  const command = ffmpeg()
    .input(concatFile)
    .inputOptions(['-f concat', '-safe 0'])
    .input(audioInput)
    .outputOptions([
      '-c:v libx264',
      '-c:a aac',
      '-pix_fmt yuv420p', // for compatibility
      '-shortest'
    ])
    .size('1920x1080')
    .autopad('black')
    .fps(25)
    .on('progress', (progress) => {
      if (progress.percent) {
        console.log(`Processing: ${Math.floor(progress.percent)}% done`);
      }
    })
    .on('end', () => {
      console.log('Video generation complete!');
      cleanup();
    })
    .on('error', (err, stdout, stderr) => {
      console.error('Error during video generation:', err.message);
      console.error('ffmpeg stderr:', stderr);
    })
    .save(outputVideo);
}

function cleanup() {
  console.log('Cleaning up temporary files...');
  fs.rm(tempDir, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error('Error cleaning up temp directory:', err);
    } else {
      console.log('Cleanup complete.');
    }
  });
}

main().catch(err => {
  console.error('An unexpected error occurred:', err);
});
