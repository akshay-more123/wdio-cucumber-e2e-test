import Dauglas_Page from "./dauglasPage.js";
import reporter from "../helper/reporter.js";
import chai from "chai";

class PerfumePage extends Dauglas_Page {
  constructor() {
    super();
  }
  /**Page objects */
  get Highlight_DropDown() {
    return $(`//div[text()='Highlights']`);
  }
  get saleCheckBox() {
    return $(`//div[text()='Sale']`);
  }
  get neuCheckbox() {
    return $(`//div[text()='NEU']`);
  }
  get limitiertCheckbox() {
    return $(`//div[text()='Limitiert']`);
  }

 

  // Open the 'flags' dropdown
  async clickOnFlagsDropdown() {
    try {
      await this.openFlagsDropdown(await this.Highlight_DropDown);
   
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async srollUpandDown() {
    await browser.execute(() => {
      window.scrollBy(0, window.innerHeight);
    });
  }

  async selectSaleOption() {
    try {
      
      await this.selectSaleCheckbox(await this.saleCheckBox);
      
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async selectNEUOption() {
    try {
      
      await this.clickOnFlagsDropdown();
      await this.selectNeuCheckbox(await this.neuCheckbox);
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async selectLimitiertOption() {
    try {
      
      await this.clickOnFlagsDropdown();
      await this.selectLimitiertCheckbox(await this.limitiertCheckbox);
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async handleDropDown() {
    try {
      await this.clickOnFlagsDropdown();
    } catch (err) {
      throw err;
    }
  }

  async handleSaleDropDown() {
    try {
      await this.selectSaleOption();
    } catch (err) {
      throw err;
    }
  }

  async handleNeuDropDown() {
    try {
      await this.selectNEUOption();
    } catch (err) {
      throw err;
    }
  }

  async handleLimitierDropDown() {
    try {
      await this.selectLimitiertOption();
    } catch (err) {
      throw err;
    }
  }

  

  //Assert dropdown option is select or not
  public async assertSaleCheckboxChecked(): Promise<void> {
    const isChecked = await (await $("#sale-checkbox")).isSelected(); 
    chai.expect(isChecked).to.true("Sale checkbox should be selected");
    
  }


  public async assertNeuCheckboxChecked(): Promise<void> {
    const isChecked = await (await $("#neu-checkbox")).isSelected(); 
    chai.expect(isChecked).to.true("NEU checkbox should be selected");
  }

 
  public async assertLimitiertCheckboxChecked(): Promise<void> {
    const isChecked = await (await $("#limitiert-checkbox")).isSelected(); 
    chai.expect(isChecked).to.true("Limitiert checkbox should be selected");
  }
}
export default new PerfumePage();
