const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'video-script.md');
const outputPath = path.join(__dirname, '..', 'audio-preview.aiff'); // Using .aiff for macOS

fs.readFile(scriptPath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the script file:", err);
        return;
    }

    // A simple regex to strip markdown headings and code blocks
    const text = data.replace(/## .*/g, '').replace(/`[^`]+`/g, '').replace(/\n/g, ' ');

    const command = `say -o "${outputPath}" --data-format=alaw "${text}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Audio preview saved to ${outputPath}`);
    });
});
