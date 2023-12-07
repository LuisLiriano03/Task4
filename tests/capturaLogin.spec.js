const { Builder} = require("selenium-webdriver");
const fs = require('fs');

async function takeScreenshot() {
    
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://127.0.0.1:5501/login.html');
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('CapturaLogin.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como screenshot.png');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.quit();
    }
}

takeScreenshot();