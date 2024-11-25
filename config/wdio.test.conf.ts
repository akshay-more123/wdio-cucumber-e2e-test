import { config as baseConfig } from "../wdio.conf"
export const config = Object.assign(baseConfig,{

    //All test Env specific keys and pair
    environmet : "TEST",
    sauceDemoURL : "https://www.saucedemo.com/v1/"
})