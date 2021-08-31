import {Config} from 'protractor';

var chromeDriverPath = 'C:\Users\hal19\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_91.0.4472.101.exe';

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testSpec/calculator.ts'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };