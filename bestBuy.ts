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

    // Locators for 'sign in test' 
    
    accountBtn: By = By.xpath('//span[@class="v-p-right-xxs line-clamp"]')
    signInBtn: By = By.xpath('//a[@class="c-button c-button-secondary c-button-sm sign-in-btn"]')
    emailInput: By = By.css('[id="fld-e"]')
    passwordInput: By = By.css('[id="fld-p1"]')
    signInAfterCredentials: By = By.xpath('//button[@class="c-button c-button-secondary c-button-lg c-button-block c-button-icon c-button-icon-leading cia-form__controls__submit "]') 

    // + Locators below for 'adding a shipping address test' - account info navigates to profile

    accountInfo: By = By.xpath('//a[@href="/site/customer/myaccount"]') 
    addShipping: By = By.xpath('//a[@href="/profile/c/address/shipping/add"]') 
    firstName: By = By.css('[id="firstName-id"]')
    lastName: By = By.css('[id="lastName-id"]')
    addressLine1: By = By.css('[id="addressLine1-id"]')
    addressLine2: By = By.css('[id="addressLine2-id"]')
    addressLineCity: By = By.css('[id="city-id"]')
    stateDropDown: By = By.css('[id="state-dropdown-input"]')
    // Line below - new states to use can be added, only need to swap out the abbreviation
    stateMN: By = By.xpath('//option[@value="MN"]')
    addressLineZip: By = By.css('[id="postalCode-id"]')
    addressPhone: By = By.css('[id="phoneNumber-id"]')
    saveAddressBtn: By = By.xpath('//button[@class="c-button c-button-secondary c-button-md addresses-address-form-page__submit-button submit-button "]')
    // confirmation that the address has been saved 
    addressAddedMsg: By = By.xpath('//span[@class="addresses-address-list-page__alert-message"]')








    // Below is a list of async functions that will be used for testing 

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver 
        else 
        //this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
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