import {Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver";

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('async await functionality', async () => {
    await driver.get('https://www.bestbuy.com')
    await driver.wait(until.elementLocated(By.name('st')))
    await driver.findElement(By.name('st')).sendKeys("cellphone stand\n")
    await driver.findElement(By.xpath('//button[@class="header-search-button"]')).click()
    await driver.findElement(By.xpath('//*[@id="sort-by-select"]/option[3]')).click()
    await driver.sleep(4000)
})
afterAll(async () => {
    await driver.quit()