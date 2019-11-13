module.exports = async (page, scenario, vp) => {
    await require('./onCommonReady')(page, scenario, vp);

    // remove random generated dom
    const selectors= ['#paneRecommend1'];
    await page.evaluate((sels) => {
        sels.forEach(sel => {
            const elements = document.querySelectorAll(sel);
            for(let i=0; i< elements.length; i++){
                elements[i].parentNode.removeChild(elements[i]);
            }
        });
    }, selectors)
};
