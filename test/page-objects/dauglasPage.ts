export default class Dauglas_Page {
  constructor() {}

  /**All reusable web functions */
  async navigateTo() {
    await browser.url("https://www.douglas.de/de");
    // await browser.maximizeWindow()
  }
  async clickonCoockies(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }
  async clickonPerfume(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }

  async openFlagsDropdown(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }
  async selectSaleCheckbox(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }

  async selectNeuCheckbox(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }

  async selectLimitiertCheckbox(ele) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }
}
