# Data Model: Video Sequence

The video's structure and timing will be defined in a JSON file named `video-sequence.json`. This file will contain an array of "scenes," where each scene defines an image to display and its duration in seconds.

## `video-sequence.json` Structure

```json
{
  "scenes": [
    {
      "image": "path/to/image1.png",
      "duration": 5.5
    },
    {
      "image": "path/to/image2.png",
      "duration": 10.2
    },
    {
      "image": "path/to/image3.png",
      "duration": 8
    }
  ]
}
```

### Scene Object Properties
- **`image`** (string): The relative path to the image file (either a screenshot or a code image) from the `video-generator/src/assets/` directory.
- **`duration`** (number): The number of seconds the image should be displayed in the video.

The video generation script will process this array in order, creating a sequence of images that matches the specified durations. The total duration of the video will be the sum of all scene durations. This must align with the length of the audio file.
