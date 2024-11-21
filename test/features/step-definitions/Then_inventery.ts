import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai";

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