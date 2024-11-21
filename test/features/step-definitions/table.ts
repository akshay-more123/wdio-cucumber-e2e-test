import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Table page is opened$/, async function()
{

    //launch the url
await browser.url("https://the-internet.herokuapp.com/")
await browser.setTimeout({implicit:15000, pageLoad:10000})
await browser.maximizeWindow();

}
)



When(/^Fetch all the data from given table and make a dynamic$/, async function () {
 
   {
        //click on table option 
        await browser.$(`//a[text()='Sortable Data Tables']`).click()

        //count no of row
        // let total_Row = await browser.$$(`//table[@id='table1']/tbody/tr`).length
        // chai.expect(total_Row).to.equal(4)
        // console.log(`>> the total column is**********:${total_Row}`);

        //count total no of column
        // let total_column = await browser.$$(`//table[@id='table1']/thead/tr/th`).length
        // chai.expect(total_column).to.equal(6)
        // console.log(`>> the total column is********:${total_column}`);
        let total_Row = await browser.$$(`//table[@id='table1']/tbody/tr`).length
    let total_column = await browser.$$(`//table[@id='table1']/thead/tr/th`).length

    let dataArr = []

    for(let i =0; i<total_Row;i++)
    {
        let ArrObject = {

            LastName : "",
            FirstName: "",
            Email: "",
            Due : "",
            Website: "",
            Action : ""
        }

        for(let j= 0 ; j<total_column; j++)
        {
            let data = await browser.$(`//table/tbody/tr[${i + 1}/td[${j+1}]`).getText()
            if(j===0)ArrObject.LastName = data
            if(j===1)ArrObject.FirstName = data
            if(j===2)ArrObject.Email = data
            if(j===3)ArrObject.Due = data
            if(j===4)ArrObject.Website = data
            if(j===5)ArrObject.Action = data
    }
    dataArr.push(ArrObject)
}
console.log(`>> the data of table is****####:${JSON.stringify(dataArr)}`);
   }
})

// Then(/^print all the data of table dynamically$/, async function()
// {
//     let total_Row = await browser.$$(`//table[@id='table1']/tbody/tr`).length
//     let total_column = await browser.$$(`//table[@id='table1']/thead/tr/th`).length

//     let dataArr = []

//     for(let i =0; i<total_Row;i++)
//     {
//         let ArrObject = {

//             LastName : "",
//             FirstName: "",
//             Email: "",
//             Due : "",
//             Website: "",
//             Action : ""
//         }

//         for(let j= 0 ; j<total_column; j++)
//         {
//             let data = await browser.$(`//table/tbody/tr[${i + 1}/td[${j+1}]`).getText()
//             if(j===0)ArrObject.LastName = data
//             if(j===1)ArrObject.FirstName = data
//             if(j===2)ArrObject.Email = data
//             if(j===3)ArrObject.Due = data
//             if(j===4)ArrObject.Website = data
//             if(j===5)ArrObject.Action = data
//     }
//     dataArr.push(ArrObject)
// }
// console.log(`>> the data of table is****####:${JSON.stringify(dataArr)}`);
// }
// )