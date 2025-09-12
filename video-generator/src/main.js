const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');
const videoSequence = require('./video-sequence.json');

ffmpeg.setFfmpegPath(ffmpegPath);

const outputVideo = path.join(__dirname, '..', 'preview-video.mp4');
const audioInput = path.join(__dirname, 'assets', 'audio.aiff');
const tempDir = path.join(__dirname, 'temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

let videoIndex = 0;
const videoParts = [];

function createVideoPart(scene, callback) {
  const partPath = path.join(tempDir, `part-${videoIndex++}.mp4`);
  videoParts.push(partPath);

  console.log(`Creating video part for ${scene.image} with duration ${scene.duration}s`);

  ffmpeg(path.join(__dirname, scene.image))
    .loop(scene.duration)
    .size('1920x1080')
    .autopad('black')
    .fps(25)
    .noAudio()
    .on('end', () => {
      console.log(`Finished part: ${partPath}`);
      callback();
    })
    .on('error', (err) => {
      console.error(`Error creating part for ${scene.image}:`, err);
      callback(err);
    })
    .save(partPath);
}

function mergeVideoParts() {
  console.log('Merging all video parts...');
  const merger = ffmpeg();

  videoParts.forEach(part => {
    merger.input(part);
  });

  merger
    .on('end', () => {
      console.log('Merging finished. Adding audio...');
      addAudio();
    })
    .on('error', (err) => {
      console.error('Error merging video parts:', err);
    })
    .mergeToFile(path.join(tempDir, 'merged.mp4'), tempDir);
}

function addAudio() {
  ffmpeg(path.join(tempDir, 'merged.mp4'))
    .input(audioInput)
    .outputOptions('-c:v copy')
    .outputOptions('-c:a aac')
    .outputOptions('-shortest')
    .on('end', () => {
      console.log('Video generation complete!');
      cleanup();
    })
    .on('error', (err) => {
      console.error('Error adding audio:', err);
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

let currentScene = 0;
function processNextScene() {
  if (currentScene < videoSequence.scenes.length) {
    createVideoPart(videoSequence.scenes[currentScene], (err) => {
      if (err) {
        console.error('Stopping due to error.');
        return;
      }
      currentScene++;
      processNextScene();
    });
  } else {
    mergeVideoParts();
  }
}

console.log('Starting video generation...');
processNextScene();
