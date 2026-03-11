const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = 'D:\\hcoding\\amc-videos';
fs.mkdirSync(OUT, { recursive: true });

const PAGES = [
  { name: 'home', url: 'http://localhost:3001/' },
  { name: 'vehicles', url: 'http://localhost:3001/vehicles' },
  { name: 'facilities', url: 'http://localhost:3001/facilities' },
  { name: 'about', url: 'http://localhost:3001/about' },
];

(async () => {
  const browser = await chromium.launch({ headless: false });

  for (const pg of PAGES) {
    console.log(`Recording ${pg.name}...`);

    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      recordVideo: { dir: OUT, size: { width: 1440, height: 900 } },
    });

    const page = await ctx.newPage();
    await page.goto(pg.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Slow scroll down
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    let y = 0;
    while (y < totalHeight) {
      y += 80;
      await page.evaluate(pos => window.scrollTo({ top: pos, behavior: 'instant' }), y);
      await page.waitForTimeout(60);
    }

    // Hold at bottom
    await page.waitForTimeout(2000);

    await ctx.close();

    // Rename the video file
    const video = page.video();
    if (video) {
      const videoPath = await video.path();
      const newPath = path.join(OUT, `${pg.name}.webm`);
      fs.renameSync(videoPath, newPath);
      console.log(`Saved: ${newPath}`);
    }
  }

  await browser.close();
  console.log('All done!');
})();
