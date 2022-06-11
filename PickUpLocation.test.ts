import {Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver";

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('PickUp', async () => {
    await driver.get('https://www.bestbuy.com')
    await driver.wait(until.elementLocated(By.name('st')))
    await driver.findElement(By.name('st')).sendKeys("cellphone stand\n")
    await driver.findElement(By.xpath('//button[@class="header-search-button"]')).click()
    await driver.findElement(By.xpath('(//a[@href="/site/digipower-the-achiever-video-call-pro-kit-with-60-led-light-stand-smartphone-holder-black/6454615.p?skuId=6454615"])[1]')).click()
    await driver.findElement(By.xpath('//button[normalize-space()="See all pickup locations"]')).click()
    await driver.sleep(4000)
})
afterAll(async () => {
    await driver.quit()
})