// //import { expect } from 'webdriverio';

// export class PerfumePage {
//   private page: WebdriverIO.Browser;
//   private flagsButton: WebdriverIO.Element;
//   private saleCheckbox: WebdriverIO.Element;
//   private neuCheckbox: WebdriverIO.Element;
//   private limitiertCheckbox: WebdriverIO.Element;

//   constructor(page: WebdriverIO.Browser) {
//     // this.page = page;
//     // // Initialize the elements
//     // this.flagsButton = page.$('[data-testid="flags"]');
//     // this.saleCheckbox = page.$('input[type="checkbox"][name="Sale"]');
//     // this.neuCheckbox = page.$('input[type="checkbox"][name="NEU"]');
//     // this.limitiertCheckbox = page.$('input[type="checkbox"][name="Limitiert"]');
//   }

//   // Open the 'flags' dropdown
//   private async openFlagsDropdown() {
//     await this.flagsButton.click();
//     await this.page.pause(2000); // Adjust waiting time if needed
//   }

//   // Select 'Sale' checkbox
//   public async selectSaleCheckbox() {
//     await this.openFlagsDropdown();
//     await this.saleCheckbox.click();
//   }

//   // Select 'NEU' checkbox
//   public async selectNeuCheckbox() {
//     await this.openFlagsDropdown();
//     await this.neuCheckbox.click();
//   }

//   // Select 'Limitiert' checkbox
//   public async selectLimitiertCheckbox() {
//     await this.openFlagsDropdown();
//     await this.limitiertCheckbox.click();
//   }

//   // Assert 'Sale' checkbox is checked
//   public async assertSaleCheckboxChecked() {
//     const isChecked = await this.saleCheckbox.isSelected();
//     expect(isChecked).toBe(true, 'Sale checkbox should be selected');
//   }

//   // Assert 'NEU' checkbox is checked
//   public async assertNeuCheckboxChecked() {
//     const isChecked = await this.neuCheckbox.isSelected();
//     expect(isChecked).toBe(true, 'NEU checkbox should be selected');
//   }

//   // Assert 'Limitiert' checkbox is checked
//   public async assertLimitiertCheckboxChecked() {
//     const isChecked = await this.limitiertCheckbox.isSelected();
//     expect(isChecked).toBe(true, 'Limitiert checkbox should be selected');
//   }
// }
