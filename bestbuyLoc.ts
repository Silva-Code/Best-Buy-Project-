//DU
import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver; 
    url?: string;
    
}


export class bestbuyLoc {
    driver: WebDriver;
    url: string = "https://www.bestbuy.com/"; 

    //Locators below for elements we will be interacting with for adding product to a cart
    
    addTocartBtn: By = By.xpath('//button[@class="c-button c-button-primary c-button-lg c-button-block c-button-icon c-button-icon-leading add-to-cart-button"]')
    
    samsungTV: By = By.xpath('//img[@src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=200;maxWidth=300"]')
    
    // Locators below are for interacting with Menu Button "Hamburger Button"
    
    hamburgerNavBtn: By= By.xpath('//button[@class="c-button-unstyled hamburger-menu-button"]')
 
    //hamburgerNavBtn: By= By.xpath('//button [@class="shop-header-68811421"]/div/div[1]/header/div[1]/div/nav/button"]')
    
    // the Locator below is for interacting with the go to car button
    goToCartBtn: By= By.xpath('//a[@class="c-button c-button-secondary c-button-sm c-button-block "]')

    // The locator below is for interacting with the save to car feature.
    saveTocartBtn: By = By.xpath('//button[@class="c-button-link cart-item__save"]')
   
    // The Locator below is for interacting  with  the store locator feature.
    storeLocatorBtn: By = By.xpath('//span[@class="store-display-name"]')
   
    // The Locator below is for interacting with the find another store feature.
    findAnotherstoreBtn: By = By.xpath('//a[@href="/site/store-locator"]')
    
    // The Locator below is for interacting with the search by zip search bar feature.
    searchByzipbar: By = By.xpath ('//input[@class="tb-input form-control zip-code-input v-medium"]')

    // The Locator below is fof interacting with the update button within the find a store feature.
    updatebtn: By = By.xpath ('//button[@class="c-button c-button-secondary c-button-md "]')


    // Below is the Base Page that we created in Class//
    constructor (options?: Options){
        if (options&& options.driver) this .driver= options.driver
        else
        //this.driver = new Builder() .withCapabilities(Capabilities.chrome()).build()
        if (options && options.url) this. url = options.url
    }
    async navigate (url?: string): Promise < void> {
        if (url) return await this .driver.get (url)
        else if (this.url) return await this.driver .get (this.url)
        // above method is for page objects

        else 
        return Promise.reject(
            'Basepage.navigate () needs a url defined on the page objects or one passed in '
        )
    }
    async getElement(elementBy: By) : Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element =await this .driver. findElement(elementBy)
        await this .driver.wait(until .elementIsVisible(element))
        return element

    }
    async click(elementBy:By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }
    async setInput(elementBy:By, keys: any): Promise<void>{
        let input = await this.getElement(elementBy)
        await input. clear()
        return input.sendKeys(keys)

    }
    async getText(elementBy: By): Promise<string>{
    return (await this.getElement(elementBy)).getText()

    }
    async getAttribute(elementBy: By, attributes: string): Promise<string> {
        return (await this. getElement(elementBy)).getAttribute(attributes)

    }
}