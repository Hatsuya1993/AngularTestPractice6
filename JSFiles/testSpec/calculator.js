"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObject/calculator");
describe('Testing the functionality of the calculator website', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        yield calculator.website;
    }));
    it('Check if the correct website is loaded through the link', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("SimpleCalculator");
    }));
    it('Check if the title is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        expect(yield calculator.title.isPresent()).toBeTruthy();
        expect(yield calculator.title.isDisplayed()).toBeTruthy();
        expect(yield calculator.title.getText()).toBe("AngularJS calculator");
    }));
    it('Check if the initial values are 0 for input a', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        expect(yield calculator.inputA.isPresent()).toBeTruthy();
        expect(yield calculator.inputA.isDisplayed()).toBeTruthy();
        expect(yield calculator.inputA.getAttribute('value')).toBe('0');
    }));
    it('Check if the initial values are 0 for input b', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        expect(yield calculator.inputB.isPresent()).toBeTruthy();
        expect(yield calculator.inputB.isDisplayed()).toBeTruthy();
        expect(yield calculator.inputB.getAttribute('value')).toBe('0');
    }));
    it('Check if the result printed initial is 0 + 0 = 0', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        expect(yield calculator.result.isPresent()).toBeTruthy();
        expect(yield calculator.result.isDisplayed()).toBeTruthy();
        expect(yield calculator.result.getText()).toBe('0 + 0 = 0');
    }));
    it('Check when a number is clicked for the first input, it displays', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        yield calculator.inputA.clear();
        yield calculator.inputA.sendKeys(1);
        expect(yield calculator.inputA.getAttribute('value')).toBe("1");
    }));
    it('Check when a number is clicked for the second input, it displays', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        yield calculator.inputB.clear();
        yield calculator.inputB.sendKeys(1);
        expect(yield calculator.inputB.getAttribute('value')).toBe("1");
    }));
    it('Check when 2 input values are given and added, equals to the output', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        yield calculator.inputA.clear();
        yield calculator.inputA.sendKeys(1);
        yield calculator.inputB.clear();
        yield calculator.inputB.sendKeys(2);
        expect(yield calculator.result.getText()).toBe('1 + 2 = 3');
    }));
    fit('Check when a diffrent operator is given, it selects it correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const calculator = new calculator_1.Calculator();
        yield calculator.operation.count().then((data) => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < data; i++) {
                yield calculator.operation.get(i).getText().then((data) => __awaiter(void 0, void 0, void 0, function* () {
                    if (data === '-') {
                        calculator.operation.get(i).click();
                    }
                }));
            }
        }));
        expect(yield calculator.result.getText()).toBe('0 - 0 = 0');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0M7QUFDcEMseURBQW1EO0FBRW5ELFFBQVEsQ0FBQyxxREFBcUQsRUFBRSxHQUFTLEVBQUU7SUFDdkUsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUNoQixNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUNuQyxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUE7SUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyx5REFBeUQsRUFBRSxHQUFTLEVBQUU7UUFDckUsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsK0JBQStCLEVBQUUsR0FBUyxFQUFFO1FBQzNDLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN2RCxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDekQsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ3pFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsK0NBQStDLEVBQUUsR0FBUyxFQUFFO1FBQzNELE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN4RCxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUQsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxHQUFTLEVBQUU7UUFDM0QsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDbkMsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMxRCxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQVMsRUFBRTtRQUM5RCxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUNuQyxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDeEQsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFELE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxpRUFBaUUsRUFBRSxHQUFTLEVBQUU7UUFDN0UsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDbkMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQy9CLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxrRUFBa0UsRUFBRSxHQUFTLEVBQUU7UUFDOUUsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDbkMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQy9CLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxxRUFBcUUsRUFBRSxHQUFTLEVBQUU7UUFDakYsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDbkMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQy9CLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQy9CLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLGtFQUFrRSxFQUFFLEdBQVMsRUFBRTtRQUMvRSxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUNuQyxNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFFLEVBQUU7WUFDbEQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDekIsTUFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTSxJQUFJLEVBQUUsRUFBRTtvQkFDM0QsSUFBRyxJQUFJLEtBQUssR0FBRyxFQUFFO3dCQUNiLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3FCQUN0QztnQkFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUUvRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9