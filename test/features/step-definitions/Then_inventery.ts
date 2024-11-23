import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai";
import reporter from "../../helper/reporter.js"
import logger from "../../helper/logger.js"

Then(/^Validate all products have valid price$/, async function()
{

let price_Arr = await browser.$$(`.inventory_item_price`)
let leng = await price_Arr.length
let priceArr= []
for(let i = 0; i<leng; i++)
   
{
    
    let ele_Arr = await (await price_Arr[i].getText()).replace("$", "")
    priceArr.push(ele_Arr)
}
    console.log(`>> the price array is : ${priceArr}`);

    //now seperate the $ from price and assert 

    let validArr = priceArr.filter((ele) => ele <= 0)
    chai.expect(validArr.length).to.equal(0);


}
)


// Then(/^Inventory page should (.*)\s?list (.*)$/, async function (negativeCheck, noOfProducts) {
//     try {
//         if (!noOfProducts)
//             throw Error(`Invalid product count provided: ${noOfProducts}`);
//         let eleArr = await $$(`.inventory_item_name`);
//         try {
//             chai.expect(eleArr.length).to.equal(parseInt(noOfProducts)); // ===
//         } catch (err) {
//             reporter.addStep(this.testid, "error", "Known issue - product count mismatch", true, "JIRA-123")
//         }
//     } catch (err) {
//         console.log(`>> The type of err: ${typeof err}`);
//         console.log(`>> The name property : ${err.name}`);
//         console.log(`>> The message property : ${err.message}`);
//         err.message = `${this.testid}: Failed when comparing product count, ${err.message}`
//         throw err // Failing
//         logger.error(err.message)

//     }
// });