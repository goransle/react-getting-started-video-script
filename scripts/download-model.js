const https = require('https');
const fs = require('fs');
const path = require('path');

const modelFiles = [
  'en_US-lessac-medium.onnx',
  'en_US-lessac-medium.onnx.json'
];

const baseUrl = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/lessac/medium/';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Failed to get '${url}' (${response.statusCode})`);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file async
      reject(err.message);
    });
  });
}

async function downloadModels() {
  console.log('Downloading voice models...');
  for (const fileName of modelFiles) {
    const destPath = path.join(__dirname, '..', fileName);
    if (fs.existsSync(destPath)) {
      console.log(`- ${fileName} already exists. Skipping.`);
      continue;
    }
    console.log(`- Downloading ${fileName}...`);
    const url = baseUrl + fileName;
    try {
      await downloadFile(url, destPath);
      console.log(`  ... Done.`);
    } catch (error) {
      console.error(`Error downloading ${fileName}:`, error);
    }
  }
  console.log('Model download process complete.');
}

downloadModels();
