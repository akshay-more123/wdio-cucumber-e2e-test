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
    
    await browser.url("https://www.douglas.de/de");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow()
    await dauglasHomePage.handleCoockies(this.testid);
  } catch (err) {
    err.message = `${this.testid}: Failed at login step, ${err.message}`;
    throw err;
  }
});

When(/^I click on perfume section$/, async () => {
  try {
    reporter.addStep(testId, "info", "click on perfume section.."); 
    await dauglasHomePage.clickOnPerfume(testId);
    await browser.pause(2000);
    const dummyElement = await $(`//a[@class='link link--text douglas-logo__link']//*[name()='svg']//*[name()='path' and contains(@fill-rule,'evenodd')]`); 
    // Move the mouse cursor to this element
    await dummyElement.moveTo();

    console.info('Mouse cursor moved to the specified element');

  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

Then(/^I should be on the homepage$/, async () => {
  const title = await browser.getTitle();
  console.log(`>> the title name is: ${title}`);
  chai.expect(title).to.equal('Online-Parfümerie ✔️ Parfum & Kosmetik kaufen | DOUGLAS');  
});

