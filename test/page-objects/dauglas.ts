import Dauglas_Page from "./dauglasPage.js"
import reporter from "../helper/reporter.js"

class HomePage extends Dauglas_Page {
    constructor() {
        super()
    }

     /**Page objects */
     get coocies_Btn() { return $(`.sc-dcJsrY.eIFzaz`) }
     get perfume() { return $(`//a[text()='PARFUM']`) }
     

     async clickCoockiesBtn(testid: string) {
        try {
            await this.clickonCoockies(await this.coocies_Btn)
            reporter.addStep(testid, "info", `coockies button clicked`)
        } catch (err) {
            err.message = `Error clicking login button, ${err.message}`
            throw err
        }
    }

    
    async clickPerfume(testid: string) {
        try {
            await this.clickonPerfume(await this.perfume)
            reporter.addStep(testid, "info", `perfume button clicked`)
        } catch (err) {
            err.message = `Error clicking login button, ${err.message}`
            throw err
        }
    }

    async handleCoockies(testid: string) {
        try {
            await this.clickCoockiesBtn(testid)
            
        } catch (err) {
            throw err
        }
    }

    async clickOnPerfume(testid: string) {
        try {
            await this.clickPerfume(testid)
            
        } catch (err) {
            throw err
        }
    //
}


}


export default new HomePage()