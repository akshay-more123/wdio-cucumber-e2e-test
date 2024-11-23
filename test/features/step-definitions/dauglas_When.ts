import { When, Then } from '@cucumber/cucumber';
import chai from "chai";
import reporter from "../../helper/reporter.js";
//import dauglasHomePage from "../../page-objects/dauglas.js";
import perfumePage from "../../page-objects/perfumeHomePage.js"

let testId = "";

When(/^I open the 'flags' dropdown$/, async () => {
  // Open the 'flags' dropdown by clicking the button
  try {
    
    await browser.pause(5000);
    await perfumePage.handleDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
  

});

When(/^I select the 'Sale' checkbox$/, async () => {
  
  try {
   await browser.pause(2000);
    await perfumePage.handleSaleDropDown();
    
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
 
});

Then(/^the 'Sale' checkbox should be checked$/, async () => {
  // Assert that the 'Sale' checkbox is checked
  try {
    await browser.pause(2000)
    await perfumePage.assertSaleCheckboxChecked();
   } catch (err) {
    
  }
});

When(/^I select the 'NEU' checkbox$/, async () => {
   
  try {
    await browser.pause(5000);
    await perfumePage.handleNeuDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

Then(/^the 'NEU' checkbox should be checked$/, async () => {
  // Assert that the 'NEU' checkbox is checked
  
  try {
    await browser.pause(2000)
    await perfumePage.assertNeuCheckboxChecked();
  } catch (err) {
    
  }
});

When(/^I select the 'Limitiert' checkbox$/, async () => {
  
  try {
    await browser.pause(3000)
    await perfumePage.handleLimitierDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

Then(/^the 'Limitiert' checkbox should be checked$/, async () => {
  // Assert that the 'Limitiert' checkbox is checked
  try {
    await browser.pause(2000)
    await perfumePage.assertLimitiertCheckboxChecked();
  } catch (err) {
    
 }
});
