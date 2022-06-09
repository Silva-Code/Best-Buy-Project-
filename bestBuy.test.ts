import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
import { bestBuy } from './bestBuy';

const chromedriver = require("chromedriver")
const bb = new bestBuy() 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

test('sign into account', async () => {
    await driver.get('https://www.bestbuy.com/')
    await driver.findElement(bb.accountBtn).click()
    await driver.sleep(2000)
    await driver.findElement(bb.signInBtn).click()
    await driver.findElement(bb.emailInput).sendKeys("qrptgroup1@yahoo.com")
    await driver.findElement(bb.passwordInput).sendKeys("DevMountain QA123!")
    await driver.findElement(bb.signInAfterCredentials).click()
    await driver.sleep(2000)
    //await driver.quit()
}) 

test('add a default shipping address' , async() => {
    // Lines 23-30 are commented out when running both tests simultaneously
 
    /*await driver.get('https://www.bestbuy.com/')
    await driver.findElement(bb.accountBtn).click()
    await driver.sleep(2000)
    await driver.findElement(bb.signInBtn).click()
    await driver.findElement(bb.emailInput).sendKeys("qrptgroup1@yahoo.com")
    await driver.findElement(bb.passwordInput).sendKeys("DevMountain QA123!")
    await driver.findElement(bb.signInAfterCredentials).click()
    await driver.sleep(2000)*/
    await driver.findElement(bb.accountBtn).click()
    await driver.sleep(2000)
    await driver.findElement(bb.accountInfo).click()
    await driver.sleep(2000)
    await driver.findElement(bb.addShipping).click()
    await driver.sleep(2000)
    await driver.findElement(bb.firstName).sendKeys('Han')
    await driver.sleep(1000)
    await driver.findElement(bb.lastName).sendKeys('Solo')
    await driver.sleep(1000)
    await driver.findElement(bb.addressLine1).sendKeys('7601 Penn Ave S')
    await driver.sleep(1000)
    await driver.findElement(bb.addressLineCity).sendKeys('Minneapolis')
    await driver.sleep(1000)
    await driver.findElement(bb.stateDropDown).click()
    await driver.findElement(bb.stateMN).click()
    await driver.findElement(bb.addressLineZip).sendKeys('55423')
    await driver.findElement(bb.addressPhone).sendKeys('2092004071')
    await driver.sleep(4000)
    await driver.quit()
})
