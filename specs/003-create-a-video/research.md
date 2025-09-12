# Research: Code-to-Image Library

## Decision
We will use `carbon-now-scraper` to generate images from the source code files.

## Rationale
- **High-Quality Output**: `carbon-now-scraper` uses Carbon (carbon.now.sh), a popular and well-regarded tool for creating beautiful images of source code. The output is aesthetically pleasing and suitable for a video.
- **Customization**: It allows for a good degree of customization, including theme, font, and background color, which will help in creating a consistent look for the video.
- **Ease of Use**: The library provides a straightforward API for generating images from a string of code.

## Alternatives Considered
- **`puppeteer-screenshot-code`**: This is a viable alternative that uses Puppeteer to take a screenshot of a code block rendered in a headless browser. However, it requires more manual setup to achieve the same level of styling as Carbon.
- **Manual Screenshots**: Taking screenshots of the code in a text editor manually is an option, but it's not automated and can lead to inconsistencies in styling and dimensions. `carbon-now-scraper` ensures a consistent and professional look.
