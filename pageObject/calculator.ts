import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class Calculator {
    website : any = browser.get("https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/")
    title: ElementFinder = $("body h1")
    inputA: ElementFinder = $("input[ng-model='a']")
    inputB: ElementFinder = $("input[ng-model='b']")
    result: ElementFinder = $("b.result")
    operation: any = $$("select[ng-model='operation'] option")
}