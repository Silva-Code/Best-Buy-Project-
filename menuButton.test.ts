//DU
import {bestbuyLoc} from './bestbuyLoc'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';

const chromedriver = require('chromedriver')
const bb = new bestbuyLoc ()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

//The hamburgerNavBtn= the menuButton//

test('hamburgerNavBtn', async () => {
    await driver.get('https://www.bestbuy.com/')
    await driver. findElement(bb.hamburgerNavBtn).click()
    await driver. sleep(10000)
})
afterAll(async () =>{
    await driver.quit()
})