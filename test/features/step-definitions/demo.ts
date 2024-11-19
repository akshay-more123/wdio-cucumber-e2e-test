import { Given,When,Then} from "@cucumber/cucumber";
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

Given(/^A web page is opened$/, async function()
{

    await driver.url("https://the-internet.herokuapp.com/")
    await driver.setTimeout({implicit:15000,pageLoad:10000})
    await driver.maximizeWindow();
})

When(/^Perfom web interactions$/,async function()
{

    let ele_num = await browser.$("//a[text()='Inputs']");
    await ele_num.click();

    let input = await browser.$(`[type="number"]`)
    await input.setValue(12345);9
})




     


    

    


