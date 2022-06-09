//DU
import {bestbuyLoc} from './bestbuyLoc'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';

const chromedriver = require('chromedriver')
const bb = new bestbuyLoc ()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('addToCart feature', async () => {
    await driver.get('https://www.bestbuy.com/')
    await driver.wait(until.elementLocated(By.name('st')))
    // above line is for searchbar
    await driver.findElement(By.name('st')).sendKeys('samsung 65 class 7 series LED\n')
    await driver.findElement(By.xpath(('//button[@class="header-search-button"]'))).click()
    await driver.sleep(1000)
    //the line above gives the code time to search
    await driver.findElement(bb.samsungTV).click()
    //await driver.wait(until.elementLocated(By.id('component-sku-list')))
    //let value = await driver.findElement(By.id('component-sku-list')).getText()
    //expect(value.toLocaleLowerCase()).toContain("samsung tv")

    await driver.findElement(bb.addTocartBtn).click()
    await driver. sleep(20000)
})
afterAll(async () => {
    await driver.quit()
})
