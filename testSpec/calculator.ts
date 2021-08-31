import { browser } from "protractor"
import {Calculator} from "../pageObject/calculator"

describe('Testing the functionality of the calculator website', async () => {
    beforeEach(async()=>{
        const calculator = new Calculator()
        await calculator.website
    })
    it('Check if the correct website is loaded through the link', async () => {
        expect(await browser.getCurrentUrl()).toContain("SimpleCalculator")
    })
    it('Check if the title is correct', async () => {
        const calculator = new Calculator()
        expect(await calculator.title.isPresent()).toBeTruthy()
        expect(await calculator.title.isDisplayed()).toBeTruthy()
        expect(await calculator.title.getText()).toBe("AngularJS calculator")
    })
    it('Check if the initial values are 0 for input a', async () => {
        const calculator = new Calculator()
        expect(await calculator.inputA.isPresent()).toBeTruthy()
        expect(await calculator.inputA.isDisplayed()).toBeTruthy()
        expect(await calculator.inputA.getAttribute('value')).toBe('0')
    })
    it('Check if the initial values are 0 for input b', async () => {
        const calculator = new Calculator()
        expect(await calculator.inputB.isPresent()).toBeTruthy()
        expect(await calculator.inputB.isDisplayed()).toBeTruthy()
        expect(await calculator.inputB.getAttribute('value')).toBe('0')
    })
    it('Check if the result printed initial is 0 + 0 = 0', async () => {
        const calculator = new Calculator()
        expect(await calculator.result.isPresent()).toBeTruthy()
        expect(await calculator.result.isDisplayed()).toBeTruthy()
        expect(await calculator.result.getText()).toBe('0 + 0 = 0')
    })
    it('Check when a number is clicked for the first input, it displays', async () => {
        const calculator = new Calculator()
        await calculator.inputA.clear()
        await calculator.inputA.sendKeys(1)
        expect(await calculator.inputA.getAttribute('value')).toBe("1")
    })
    it('Check when a number is clicked for the second input, it displays', async () => {
        const calculator = new Calculator()
        await calculator.inputB.clear()
        await calculator.inputB.sendKeys(1)
        expect(await calculator.inputB.getAttribute('value')).toBe("1")
    })
    it('Check when 2 input values are given and added, equals to the output', async () => {
        const calculator = new Calculator()
        await calculator.inputA.clear()
        await calculator.inputA.sendKeys(1)
        await calculator.inputB.clear()
        await calculator.inputB.sendKeys(2)
        expect(await calculator.result.getText()).toBe('1 + 2 = 3')
    })
    fit('Check when a diffrent operator is given, it selects it correctly', async () => {
        const calculator = new Calculator()
        await calculator.operation.count().then(async(data) => {
            for(let i = 0; i < data; i++){
                await calculator.operation.get(i).getText().then(async(data) => {
                    if(data === '-') {
                        calculator.operation.get(i).click()
                    }
                })
            }
        })
        expect(await calculator.result.getText()).toBe('0 - 0 = 0')

    })
})
