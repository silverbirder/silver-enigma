module.exports = async (page, scenario, vp) => {
  if(vp.label == 'sp') {
    const devices = require('puppeteer/DeviceDescriptors');
    await page.emulate(devices['iPhone X']);
  }
};
