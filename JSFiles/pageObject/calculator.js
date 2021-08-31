"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.website = protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/");
        this.title = protractor_1.$("body h1");
        this.inputA = protractor_1.$("input[ng-model='a']");
        this.inputB = protractor_1.$("input[ng-model='b']");
        this.result = protractor_1.$("b.result");
        this.operation = protractor_1.$$("select[ng-model='operation'] option");
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBcUU7QUFFckUsTUFBYSxVQUFVO0lBQXZCO1FBQ0ksWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUE7UUFDL0YsVUFBSyxHQUFrQixjQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsV0FBTSxHQUFrQixjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNoRCxXQUFNLEdBQWtCLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2hELFdBQU0sR0FBa0IsY0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JDLGNBQVMsR0FBUSxlQUFFLENBQUMscUNBQXFDLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0NBQUE7QUFQRCxnQ0FPQyJ9