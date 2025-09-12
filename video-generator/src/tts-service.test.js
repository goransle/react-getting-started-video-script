const assert = require('assert');
const { exec } = require('child_process');
const { generateAudio } = require('./tts-service');

// Mock the exec function
jest.mock('child_process', () => ({
  exec: jest.fn((command, callback) => {
    callback(null, 'Success', '');
  }),
}));

describe('generateAudio with uvx', () => {
  it('should call uvx with piper-tts and the correct arguments', async () => {
    const options = {
      text: 'hello',
      modelPath: '/path/to/model.onnx',
      outputFile: '/path/to/output.wav',
    };

    await generateAudio(options);

    const safeModelPath = `"${options.modelPath}"`;
    const safeOutputFile = `"${options.outputFile}"`;
    const expectedCommand = `echo "${options.text}" | uvx piper-tts -m ${safeModelPath} -f ${safeOutputFile}`;
    
    expect(exec).toHaveBeenCalledWith(expectedCommand, expect.any(Function));
  });
});

