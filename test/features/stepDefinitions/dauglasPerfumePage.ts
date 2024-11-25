import { When, Then } from '@cucumber/cucumber';
import chai from "chai";
import reporter from "../../helper/reporter.js";
//import dauglasHomePage from "../../page-objects/dauglas.js";
import perfumePage from "../../page-objects/perfumeHomePage.js"

let testId = "";

When(/^I open the 'flags' dropdown$/, async () => {
  
  try {
    
    await browser.pause(1000);
    await perfumePage.handleDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
  

});

When(/^I select the 'Sale' checkbox$/, async () => {
  
  try {
   
    await perfumePage.handleSaleDropDown();
    
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
 
});

Then(/^the 'Sale' checkbox should be checked$/, async () => {
 
  try {
   
    await perfumePage.assertSaleCheckboxChecked();
   } catch (err) {
    
  }
});

When(/^I select the 'NEU' checkbox$/, async () => {
   
  try {
    
    await perfumePage.handleNeuDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

Then(/^the 'NEU' checkbox should be checked$/, async () => {
  
  
  try {
   
    await perfumePage.assertNeuCheckboxChecked();
  } catch (err) {
    
  }
});

When(/^I select the 'Limitiert' checkbox$/, async () => {
  
  try {
    
    await perfumePage.handleLimitierDropDown();
  } catch (err) {
    err.message = `${testId}: Failed at login step, ${err.message}`;
    throw err;
  }
});

Then(/^the 'Limitiert' checkbox should be checked$/, async () => {
 
  try {
    
    await perfumePage.assertLimitiertCheckboxChecked();
  } catch (err) {
    
 }
});
