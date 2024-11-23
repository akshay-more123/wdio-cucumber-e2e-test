import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import reporter from "../../helper/reporter.js";
import dauglasHomePage from "../../page-objects/dauglas.js";

//let loginPage: HomePage;
let testId = "";

Given(/^I open the login page and I accept the cookies$/, async function () {
  try {
    reporter.addStep(this.testid, "info", "Login to Dauglas demo..");
    testId = this.testid;
    // @ts-ignore
    //await dauglasHomePage.navigateTo(browser.options.sauseDemoURL)
    await browser.url("https://www.douglas.de/de");
    // await browser.execute(()=>{

    //   window.scrollBy(0,window.innerHeight)
    // })
    //await browser.reloadSession()
    await browser.maximizeWindow()
    await browser.pause(2000);
    await dauglasHomePage.handleCoockies(this.testid);
  } catch (err) {
    err.message = `${this.testid}: Failed at login step, ${err.message}`;
    throw err;
  }
});

When(/^I click on perfume section$/, async () => {
  try {
    reporter.addStep(testId, "info", "Login to sause demo..");
    //testId = this.testid;
    reporter.addStep(testId, "info", "Login to sause demo..");
    await dauglasHomePage.clickOnPerfume(testId);
    await browser.pause(2000);
    // Select an element to move the mouse to (could be an off-screen element or an arbitrary one)
    const dummyElement = await $(`//a[@class='link link--text douglas-logo__link']//*[name()='svg']//*[name()='path' and contains(@fill-rule,'evenodd')]`); // Or you can use any element that is always available

    // Move the mouse cursor to this element
    await dummyElement.moveTo();

    console.info('Mouse cursor moved to the specified element');

  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

// Then(/^I should be on the homepage$/, async () => {
//   const title = await browser.getTitle();
//   console.log(`>> the title name is: ${title}`);
//   chai.expect(title).to.equal('Online-Parfümerie ✔️ Parfum & Kosmetik kaufen | DOUGLAS');  // Adjust this assertion based on your site
// });

// Given(/^I am on the homepage$/, async () => {
//   await browser.url('https://yourwebsite.com');
//   loginPage = new LoginPage(browser);
// });

// When(/^I go to the Parfum section$/, async () => {
//   await loginPage.goToParfumSection();
// });

// Then(/^I should be in the Parfum section$/, async () => {
//   const currentUrl = await browser.getUrl();
//   expect(currentUrl).to.include('parfum');  // Adjust based on actual URL or page content
// });

// When(/^I select the flag options "(.*)" and "(.*)"$/, async (option1: string, option2: string) => {
//   await loginPage.selectFlagsOptions([option1, option2]);
// });

// Then(/^the selected options should be applied$/, async () => {
//   // You can validate the UI to ensure the selected options have been applied
//   // Example assertion: Check if the flags have been selected
//   const checkbox1 = await browser.$(`input[type="checkbox"][name="${option1}"]:checked`);
//   const checkbox2 = await browser.$(`input[type="checkbox"][name="${option2}"]:checked`);
//   expect(await checkbox1.isDisplayed()).to.be.true;
//   expect(await checkbox2.isDisplayed()).to.be.true;
//});
