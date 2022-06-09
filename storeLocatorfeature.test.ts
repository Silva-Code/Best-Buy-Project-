//DU
import {bestbuyLoc} from './bestbuyLoc'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';

const chromedriver = require('chromedriver')
const bb = new bestbuyLoc ()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('storeLocatorFeature', async () => {
    await driver.get('https://www.bestbuy.com/')
    
    await driver.findElement(bb.storeLocatorBtn).click()
    await driver.findElement(bb.findAnotherstoreBtn).click()
    await driver.findElement(bb.searchByzipbar).sendKeys('23235\n')
    await driver.findElement(bb.updatebtn).click()
    await driver.sleep(2000)
})
afterAll(async () => {
    await driver.quit()
})