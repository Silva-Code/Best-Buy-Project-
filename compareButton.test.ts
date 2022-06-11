import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
import {bestBuySelect} from './bestBuySelect'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

class bestBuy {
    driver: WebDriver;
    url: string = ('https://www.bestbuy.com/');
}

test('Compare functionality', async () => {
    await driver.get('https://www.bestbuy.com/')
    await driver.findElement(By.searchBar).click()
    await driver.findElement(By.searchBar).sendKeys('Samsung Tv\n')
    await driver.findElement(By.searchButton).click()
    await driver.wait(until.elementLocated(By.samsungTv4k).click()
    await driver.findElement(By.compareButt1).click()
    await driver.findElement(By.searchBar).click()
    await driver.findElement(By.searchbar).sendKeys("Roku Tv\n")
    await driver.findElement(By.rokuTv).click()
    await driver.findElement(By.compareButt2).click()
    await driver.findElement(By.compareButt3).click()
  
})
afterAll(async () => {
    await driver.quit()
})
