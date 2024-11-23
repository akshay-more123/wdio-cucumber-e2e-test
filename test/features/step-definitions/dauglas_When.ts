import { When, Then } from '@cucumber/cucumber';
import chai from "chai";
import reporter from "../../helper/reporter.js";
//import dauglasHomePage from "../../page-objects/dauglas.js";
import perfumePage from "../../page-objects/perfumeHomePage.js"

let testId = "";

When(/^I open the 'flags' dropdown$/, async () => {
  // Open the 'flags' dropdown by clicking the button
  try {
    await browser.$(`//a[text()='PARFUM']`)
    await browser.pause(5000);
   //await perfumePage.srollUpandDown();
    // await browser.execute(()=>{

    //   window.scrollBy(0,window.innerHeight)
    // })
    await browser.pause(4000);
   // reporter.addStep(testId, "info", "open the highlight dropdown..");
    await browser.pause(2000);
    //await browser.$(`//div[text()='Highlights']`);
    await perfumePage.handleDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
  //await browser.debug()

});

When(/^I select the 'Sale' checkbox$/, async () => {
  // Select the 'Sale' checkbox from the dropdown
  try {
   // reporter.addStep(testId, "info", "user select the sale check box..");
   await browser.pause(2000);
    await perfumePage.handleSaleDropDown();
    //await browser.$(`//div[text()='Sale']`)
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
 
});

// Then(/^the 'Sale' checkbox should be checked$/, async () => {
//   // Assert that the 'Sale' checkbox is checked
//   try {
//     reporter.addStep(testId, "info", "the sale check box is select succesfully..");
//     //testId = this.testid;
//     //reporter.addStep(testId, "info", "Login to sause demo..");
//     await perfumePage.assertSaleCheckboxChecked();
//   } catch (err) {
//     err.message = `${testId}: Failed at login step, ${err.message}`;
//     throw err;
//   }
// });

When(/^I select the 'NEU' checkbox$/, async () => {
  // Select the 'NEU' checkbox from the dropdown
  
  try {
    await browser.pause(5000);
   // reporter.addStep(testId, "info", "user select the NEU check box..");
    //testId = this.testid;
    //reporter.addStep(testId, "info", "Login to sause demo..");
    await perfumePage.handleNeuDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

// Then(/^the 'NEU' checkbox should be checked$/, async () => {
//   // Assert that the 'NEU' checkbox is checked
  
//   try {
//     reporter.addStep(testId, "info", "the NEU check box is select succesfully..");
//     //testId = this.testid;
//     //reporter.addStep(testId, "info", "Login to sause demo..");
//     await perfumePage.assertNeuCheckboxChecked();
//   } catch (err) {
//     err.message = `${testId}: Failed at login step, ${err.message}`;
//     throw err;
//   }
// });

When(/^I select the 'Limitiert' checkbox$/, async () => {
  // Select the 'Limitiert' checkbox from the dropdown
  
  try {
    await browser.pause(3000)
    //reporter.addStep(testId, "info", "user select the Limitiert check box..");
    //testId = this.testid;
    //reporter.addStep(testId, "info", "Login to sause demo..");
    await perfumePage.handleLimitierDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

// Then(/^the 'Limitiert' checkbox should be checked$/, async () => {
//   // Assert that the 'Limitiert' checkbox is checked
//   try {
//     reporter.addStep(testId, "info", "the Limitiert check box is select succesfully..");
//     //testId = this.testid;
//     //reporter.addStep(testId, "info", "Login to sause demo..");
//     await perfumePage.assertLimitiertCheckboxChecked();
//   } catch (err) {
//     err.message = `${testId}: Failed at login step, ${err.message}`;
//     throw err;
//  }
//});
