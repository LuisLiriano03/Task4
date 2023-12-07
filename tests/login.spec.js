const { Builder, By } = require("selenium-webdriver")

describe("Login", () => {
    it("Login with standard_user credentials", async () =>{
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5501/register.html')
        await driver.findElement(By.id('exampleFirstName')).sendKeys('test')
        await driver.findElement(By.id('exampleLastName')).sendKeys('test')
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('test@gmail.com')
        await driver.findElement(By.css('#exampleInputPassword')).sendKeys('1234567')
        await driver.findElement(By.css('#exampleRepeatPassword')).sendKeys('1234567')
        await driver.findElement(By.css('#clickbutton')).click();

        await driver.get('http://127.0.0.1:5501/login.html')
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('test@gmail.com')
        await driver.findElement(By.css('#exampleInputPassword')).sendKeys('1234567')
        await driver.findElement(By.css('#clickbutton')).click();

        await driver.get('http://127.0.0.1:5501/index.html')
        await driver.findElement(By.css('#userDropdown')).click();
        await driver.findElement(By.css('#userdslir')).click();

        await driver.sleep(5000)
        await driver.quit();
    });
});




