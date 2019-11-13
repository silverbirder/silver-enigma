module.exports = async (page, scenario, vp) => {
  await page.setJavaScriptEnabled(false);
  console.log('SCENARIO > ' + scenario.label);
  await require('./interceptImages')(page, scenario);
};
