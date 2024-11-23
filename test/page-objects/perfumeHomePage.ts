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
      await browser.pause(2000); // Adjust waiting time if needed
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
      //await this.clickOnFlagsDropdown()
      await this.selectSaleCheckbox(await this.saleCheckBox);
      await browser.pause(2000); // Adjust waiting time if needed
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async selectNEUOption() {
    try {
      await browser.pause(3000)
      await this.clickOnFlagsDropdown();
      await this.selectNeuCheckbox(await this.neuCheckbox);
      await browser.pause(2000); // Adjust waiting time if needed
    } catch (err) {
      err.message = `Error clicking login button, ${err.message}`;
      throw err;
    }
  }

  async selectLimitiertOption() {
    try {
      await browser.pause(3000)
      await this.clickOnFlagsDropdown();
      await this.selectLimitiertCheckbox(await this.limitiertCheckbox);
      await browser.pause(2000); // Adjust waiting time if needed
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

  // Select 'Sale' checkbox
  //  async selectNEUCheckbox(p0: unknown) {
  //   await this.openFlagsDropdown();
  //   await this.saleCheckBox.click();
  //   await browser.pause(2000);
  // }

  // // Select 'NEU' checkbox
  //  async selectNeuCheckbox(p0: unknown) {
  //   await this.openFlagsDropdown();
  //   await this.neuCheckbox.click();
  //   await browser.pause(2000);
  // }

  // // Select 'Limitiert' checkbox
  //  async selectLimitiertCheckbox(p0: unknown) {
  //   await this.openFlagsDropdown();
  //   await this.limitiertCheckbox.click();
  //   await browser.pause(2000);
  // }

  //   async handleDropDown() {
  //     try {
  //         await this.openFlagsDropdown()

  //     } catch (err) {
  //         throw err
  //     }
  // }

  // async clickOnPerfume(testid: string) {
  //     try {
  //         await this.clickPerfume(testid)

  //     } catch (err) {
  //         throw err
  //     }

  //   // Assert 'Sale' checkbox is checked
  //   public async assertSaleCheckboxChecked() {
  //     const isChecked = await this.saleCheckBox.isSelected();
  //     expect(isChecked).to.be(true, 'Sale checkbox should be selected');
  //   }

  //   Assert 'NEU' checkbox is checked
  //   public async assertNeuCheckboxChecked() {
  //     const isChecked = await this.neuCheckbox.isSelected();
  //     expect().to.be(true, 'NEU checkbox should be selected');
  //   }

  //   // Assert 'Limitiert' checkbox is checked
  //   public async assertLimitiertCheckboxChecked() {
  //     const isChecked = await this.limitiertCheckbox.isSelected();
  //     expect(isChecked).toBe(true, 'Limitiert checkbox should be selected');
  //   }

  // Assuming 'saleCheckBox' is a WebDriverIO element.
  public async assertSaleCheckboxChecked(): Promise<void> {
    const isChecked = await (await $("#sale-checkbox")).isSelected(); // Modify with the correct selector
    chai.expect(isChecked).to.true("Sale checkbox should be selected");
    // expect(isChecked, 'Sale checkbox should be selected').toBe(true);
  }

  // Assert 'NEU' checkbox is checked
  public async assertNeuCheckboxChecked(): Promise<void> {
    const isChecked = await (await $("#neu-checkbox")).isSelected(); // Modify with the correct selector
    chai.expect(isChecked).to.true("NEU checkbox should be selected");
  }

  // Assert 'Limitiert' checkbox is checked
  public async assertLimitiertCheckboxChecked(): Promise<void> {
    const isChecked = await (await $("#limitiert-checkbox")).isSelected(); // Modify with the correct selector
    chai.expect(isChecked).to.true("Limitiert checkbox should be selected");
  }
}
export default new PerfumePage();
