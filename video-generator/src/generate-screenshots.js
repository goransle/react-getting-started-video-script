const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const screenshotsDir = path.join(__dirname, 'assets', 'screenshots');
const videoExamplesUrl = 'http://localhost:5173';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log(`Navigating to ${videoExamplesUrl}...`);
    await page.goto(videoExamplesUrl, { waitUntil: 'networkidle' });

    console.log('Taking screenshot of the first chart...');
    await page.screenshot({ path: path.join(screenshotsDir, '01-first-chart.png') });

    console.log('Clicking button to show the second chart...');
    await page.click('button:has-text("Basic Configuration")');
    await page.waitForTimeout(1000); // Wait for chart animation

    console.log('Taking screenshot of the second chart...');
    await page.screenshot({ path: path.join(screenshotsDir, '02-basic-configuration.png') });

  } catch (error) {
    console.error('An error occurred during screenshot generation:', error);
  } finally {
    console.log('Closing browser...');
    await browser.close();
    console.log('Screenshots generated successfully.');
  }
})();
