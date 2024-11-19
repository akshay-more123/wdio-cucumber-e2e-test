// @ts-nocheck
import dotenv from 'dotenv';
import allure from '@wdio/allure-reporter';
import fs from 'fs';
import type { Options } from '@wdio/types';

// Load environment variables from .env
dotenv.config();

// Retrieve the environment variables
const headless = process.env.HEADLESS;
const debug = process.env.DEBUG;

// WebDriverIO config for running tests
export const config: Options.Testrunner = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    tsConfigPath: './tsconfig.json', // Path to your TypeScript config (make sure this exists)

    // ===================
    // Specify Test Files
    // ===================
    specs: [`${process.cwd()}/test/features/**/*.feature`],
    exclude: [
        // 'path/to/excluded/files'
    ],

    // ================
    // Capabilities
    // ================
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            maxInstances: 5,
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: headless?.toUpperCase() === 'Y' 
                    ? [
                        '--disable-web-security',
                        '--headless',
                        '--disable-dev-shm-usage',
                        '--no-sandbox',
                        '--window-size=1920,1080',
                      ] 
                    : [],
            },
            timeouts: { implicit: 10000, pageLoad: 20000, script: 30000 },
        },
    ],

    // ===================
    // Test Configurations
    // ===================
    logLevel: debug?.toUpperCase() === 'Y' ? 'info' : 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Framework to use for tests (Cucumber in your case)
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            useCucumberStepReporter: true,
            reportedEnvironmentVars: {
                Environment: 'TEST',
                App: 'Customer UI',
            },
        }]
    ],

    // Cucumber options
    cucumberOpts: {
        require: ['./test/features/step-definitions/*.ts'],
        backtrace: false,
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '@demo',
        timeout: 300000,
        ignoreUndefinedDefinitions: false,
    },

    // ===================
    // Hooks
    // ===================
    onPrepare: function (config, capabilities) {
        if (process.env.RUNNER === 'LOCAL' && fs.existsSync('./allure-results')) {
            fs.rmSync('./allure-results', { recursive: true });
        }
    },
    
    beforeScenario: function (world, context) {
        const arr = world.pickle.name.split(/:/);
        if (arr.length > 0) browser.options.testid = arr[0];
        if (!browser.options.testid) throw new Error(`Error getting testid for current scenario: ${world.pickle.name}`);
    },

    beforeStep: function (step, scenario, context) {
        if (browser.options.testid) context.testid = browser.options.testid;
    },

    afterStep: async function (step, scenario, result, context) {
        // Take screenshot if failed
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    },

    afterFeature: function (uri, feature) {
        // Add environment details to allure reports
        allure.addEnvironment('Environment', 'TEST');
    },

    // Enable browser logs
    before: async function (capabilities, specs) {
        // Custom setup logic if necessary
        console.log('Test start');
    },

    // For teardown or cleanup after tests
    after: async function (result, capabilities, specs) {
        // Custom teardown logic if necessary
        console.log('Test end');
    },
};
