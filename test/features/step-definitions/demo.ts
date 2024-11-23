import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000); // You can replace pause with waitForSelector or another method
});

When(/^Search with(.*)$/, async function (searchItem) {
  console.log(`>> searchItem:${searchItem}`);
  const ele = await browser.$(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  const ele = await $(`<h3>`);
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL:${expectedURL}`);
  const url = await browser.getUrl();

  chai.expect(url).to.equal(expectedURL);
});

// // Given(/^A web page is opened$/, async function () {
// //   await driver.url("https://the-internet.herokuapp.com/");
// //   await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
// //   await driver.maximizeWindow();
// // });

// // When(/^Perfom web interactions$/, async function () {
// //   //handling dropdown
// //   let option = await browser.$(`//a[text()='Dropdown']`);
// //   await option.click();

// //asert dropdown
// //   let dd_name = await browser.$(`//select/option[@selected='selected']`)
// //   let name = await dd_name.getText()
// //   chai.expect(name).to.equal("Please select an option")

// //select option from drop down
// //   let dd = await browser.$(`#dropdown`)
// //   await dd.selectByVisibleText("Option 1")

// //fetch all the dropdown name
// 3; //Get a list of options */
// //let eleArr = await $$(`select > option`)
// //console.log("eleArr", await eleArr[0].getText());
// // const elementLength = await eleArr.length;
// // let arr = []
// // for (let i = 0; i < elementLength; i++) {
// //     let ele = eleArr[i]
// //     let val = await ele.getText()
// //     arr.push(val)
// // }
// // console.log(`>> Options Array:|${arr}|`);

// //     Given(/^A web page is opened$/, async function () {
// //       await driver.url("https://the-internet.herokuapp.com/");
// //       await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
// //       await driver.maximizeWindow();
// //     });

// //     When(/^click on new window$/, async function () {
// //       //handling dropdown
// //       let option = await browser.$(`//a[text()='Multiple Windows']`);
// //       await option.click();
// //       let parent_window_name= await browser.getTitle()
// //       console.log(parent_window_name);
// //       let parent_Window = await browser.getWindowHandle()

// //       //click on Elemental Selenium
// //       await browser.$(`//a[text()='Elemental Selenium']`).click()

// //       //click on click here
// //       await browser.$(`//a[text()='Click Here']`).click()

// // });

// // Then(/^click on child windo element$/, async function () {
// //   let mul_Window = await browser.getWindowHandles();
// //   for(let i = 0; i < mul_Window.length; i++)
// //   {
// //     console.log(`>> mul_Window: ${mul_Window[i]} `);
// //     await browser.switchToWindow(mul_Window[i])
// //     let parent_window_name= await browser.getTitle()

// //     if(parent_window_name==="New Window")
// //     {
// //       let name =await browser.$(`//h3[text()='New Window']`).getText()
// //       console.log(name);
// //       break
// //     }
// //   }
// //   //await ele.click();
// // });

// // Then(/^back to parent window$/, async function()
// // {
// //   let parent_Window = await browser.getWindowHandle()
// //    await browser.switchToWindow(parent_Window)
// //    let wind_Name = await browser.getTitle();
// //    console.log(`>> wind_Name is : ${wind_Name}`);
// // }
// // )

// //**************************************************************************************************************** */

// //Handling an Iframe>>>>>>>>>>>>>>>>>>>>>>>>>
// Given(/^A web page is opened$/, async function () {
//   await driver.url("https://the-internet.herokuapp.com/");
//   await driver.setTimeout({ implicit: 15000, pageLoad: 10000 });
//   await driver.maximizeWindow();
// });

// When(/^click on new window$/, async function () {
//   //handling Frame
//   let option = await browser.$(`//a[text()='Frames']`);
//   await option.click();
//   let frame_opt = await browser.$(`//a[text()='iFrame']`);
//   await frame_opt.click();

//   //switch focus to frame
//   let frame = await browser.$(`#mce_0_ifr`);
//   await browser.switchFrame(frame);

//   //handle element inside the frame
//   await driver.$(`#tinymce`).setValue("Welcome to webdriverIO");
// });
