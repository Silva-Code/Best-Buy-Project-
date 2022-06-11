import {Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver";

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Save', async () => {
    await driver.get('https://www.bestbuy.com')
    await driver.wait(until.elementLocated(By.name('st')))
    await driver.findElement(By.name('st')).sendKeys("kids night light\n")
    await driver.findElement(By.xpath('//button[@class="header-search-button"]')).click()
    await driver.findElement(By.xpath('(//a[@href="/site/lumipets-led-kids-night-light-puppy-lamp-with-remote-white/6478041.p?skuId=6478041"])[1]')).click()
    await driver.findElement(By.xpath('//button[@class= "save-for-later-save"]')).click()
    await driver.sleep(4000)
})
afterAll(async () => {
    await driver.quit()
})