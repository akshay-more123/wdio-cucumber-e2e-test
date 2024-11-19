import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";


Given(/^Google page is opened$/, async function () {
  await browser.url('https://www.google.com');
  await browser.pause(1000);  // You can replace pause with waitForSelector or another method
});

When(/^Search with(.*)$/, async function (searchItem) {
    
    console.log(`>> searchItem:${searchItem}`);
    const ele = await  $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function (){

    const ele = await $(`<h3>`)
    await ele.click()
})

Then(/^URL should match (.*)$/, async function (expectedURL) {
   
    console.log(`>> expectedURL:${expectedURL}`);
    const url = await browser.getUrl();

    chai.expect(url).to.equal(expectedURL);
})

// Then(`/^URL should match(.*)$/`, async function(expectedurl)
// {

//     console.log(`>> expectedurl: ${expectedurl}`);
// })
     


    


// When(/^Search with (.*)$/, async function (searchItem) {
    
//     let ele = await $(`[name=q]`)
//     await ele.setValue(searchItem)
//     await browser.keys("Enter")
// })

// Then(/^Click on the first search result$/, async function () {
    
//     let ele = await $(`<h3>`)
//     ele.click()
// })

// Then(/^URL should match (.*)$/, async function (expectedURL) {
//     await browser.waitUntil(async function () {
//         return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
//     }, {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`})

//     let url = await browser.getUrl()
    
// })

