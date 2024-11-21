import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai";
import { error } from "console";



When(/^Inventory page should list (.*)$/, async function (noOfProducts) {
   if(!noOfProducts) throw error(`provide invalid number of product:${noOfProducts}`)
   {
          let listArr = await browser.$$(".inventory_list .inventory_item")
          chai.expect(listArr.length).to.equal(parseInt(noOfProducts))
   }
})