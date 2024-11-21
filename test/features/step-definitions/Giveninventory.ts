import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai";

// Given(/^As a standard user I login to inventory web app$/, async function () {

//     //launch the url
//     //@ts-ignore
//     await browser.url("https://www.saucedemo.com/v1/");
//     await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//     await browser.maximizeWindow();
//     console.log(`>> test user name is*************:${process.env.TEST_USERNAME}`);

//     //login to application
//     await browser.$(`#user-name`).setValue(process.env.TEST_USERNAME)
//     await browser.$(`#password`).setValue(process.env.TEST_PASWORD)
//     await browser.$(`#login-button`).click()
//   });

  Given(/^As (a|an) (.*) user I login to inventory web app$/, async function (prefixTxt, userType, dataTable) {
    
        
        let dt = dataTable.hashes()


    
      });