"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var chromeDriverPath = 'C:\Users\hal19\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_91.0.4472.101.exe';
// An example configuration file
exports.config = {
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
    specs: ['testSpec/calculator.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBSSxnQkFBZ0IsR0FBRyxtSUFBbUksQ0FBQztBQUUzSixnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUUsSUFBSTtJQUNuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztJQUVqQyx3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUksRUFBRSx5Q0FBeUM7S0FDNUQ7Q0FDRixDQUFDIn0=