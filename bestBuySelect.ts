import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    // if no driver is supplied, we make one or use the constructor to make one 
    url?: string;
    // if no url is supplied, we will provide one or use the one given here
}

export class bestBuy {
    driver: WebDriver;
    url: string = "https://www.bestbuy.com/";

    // Locators for saving feature
    //searchBar: By = By.css(".st")
    searchButton: By = By.css(".header-search-button")
    xBoxImage: By = By.xpath('//img[@alt="Microsoft - Xbox Series X 1TB Console - Black - Front_Zoom"]')
    savebutton: By = By.xpath('//button[@class="save-for-later-save"]')

    //compare feature locators
    searchBar: By = By.css(".st")
    samsungTv4k: By = By.xpath('//img[@src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451484_sd.jpg;maxHeight=200;maxWidth=300"]')
    compareButt1: By = By.xpath('//input[@id="6451484-compare-checkbox-0.5051376119268864"]')
    // .sendkeys  tcl - 55" class 4-series 4k uhd hdr smart roku tv - 55s455
    rokuTv: By = By.xpath('//img[@src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500472_sd.jpg;maxHeight=200;maxWidth=300"]')
    compareButt2: By = By.xpath('//input[@id="6500472-compare-checkbox-0.028285102120496397"]')
    compareButt3: By = By.xpath('//a[@class="compare-button btn btn-secondary"]')








    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver 
        else 
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if (options && options.url) this.url = options.url 
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url)
        else if (this.url) return await this.driver.get(this.url)
        else 
        return Promise.reject(
            'Basepage.navigate() needs a url defined on the page objects or one passed in'
        )
    }
    async getElement(elementBy: By) : Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element 
    }
    async click(elementBy:By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText() 
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
}