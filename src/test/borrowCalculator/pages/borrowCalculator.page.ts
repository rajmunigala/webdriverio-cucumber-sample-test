import * as fs from "fs";
import { expect } from 'chai';

class borrowCalculator {

    get workoutHowMuch() {
        return $('#btnBorrowCalculater');
    }

    get enterIncome() {
        return $('input[aria-labelledby=q2q1]');
    }

    get enterOtherIncome() {
        return $('input[aria-labelledby=q2q2]');
    }

    get enterLivingExpenses() {
        return $('input[aria-labelledby=q3q1]');
    }

    get enterHomeLoanRepayments() {
        return $('input[aria-labelledby=q3q2]');
    }

    get enterOtherLoanRepayments() {
        return $('input[aria-labelledby=q3q3]');
    }

    get enterOtherCommitments() {
        return $('input[aria-labelledby=q3q4]');
    }

    get enterTotalCCLimits() {
        return $('input[aria-labelledby=q3q5]');
    }

    get estimatedBorrowCapacity() {
        return $('#main-container div:nth-child(3) span.borrow__result__text');
    }

    get startOver() {
        return $('button[class=start-over]');
    }

    get getAppType() {
        return $('#main-container div:nth-child(2) > ul > li.selected > label');
    }

    get getPropertyType() {
        return $('#main-container div.borrow__question.borrow__question--tall > ul > li.selected > label');
    }

    async selectApplicationType(appType: string) {
        return $('label[for=application_type_' + appType + ']');
    }

    async selectPropertyType(propType: string) {
        return $('label[for=borrow_type_' + propType + ']');
    }

    async selectDependants() {
        return $('select[title="Number of dependants"]');
    }

    async calculateBC(scenarioId: string) {
        let jsonData = fs.readFileSync('src/data/borrowCalculator/testData.json', "utf-8");
        let parseData = JSON.parse(jsonData);
        // console.log("I am here to get data", parseData);
        for (var i = 0; i < parseData.datarows.length; i++) {
            var datarow = parseData.datarows[i];
            if (datarow.SCENARIO_ID == scenarioId) {
                //            console.log("Data element applicationType is:  " , datarow["applicationType"]);
                await (await this.selectApplicationType(datarow["applicationType"])).waitForClickable();
                await (await this.selectApplicationType(datarow["applicationType"])).click();
                await (await this.selectPropertyType(datarow["propertyType"])).waitForClickable();
                await (await this.selectPropertyType(datarow["propertyType"])).click();
                await (await this.selectDependants()).waitForClickable();
                await (await this.selectDependants()).click();
                await (await this.selectDependants()).selectByVisibleText(datarow["dependants"]);
                await (await this.enterIncome).waitForExist({ timeout: 500 });
                await (await this.enterIncome).setValue(datarow["income"]);
                await (await this.enterOtherIncome).waitForExist({ timeout: 500 });
                await (await this.enterOtherIncome).setValue(datarow["otherIncome"]);
                await (await this.enterLivingExpenses).waitForExist({ timeout: 500 });
                await (await this.enterLivingExpenses).setValue(datarow["livingExpenses"]);
                await (await this.enterHomeLoanRepayments).waitForExist({ timeout: 500 });
                await (await this.enterHomeLoanRepayments).setValue(datarow["currentHomeLoanRepayments"]);
                await (await this.enterOtherLoanRepayments).waitForExist({ timeout: 500 });
                await (await this.enterOtherLoanRepayments).setValue(datarow["otherLoanRepayments"]);
                await (await this.enterOtherCommitments).waitForExist({ timeout: 500 });
                await (await this.enterOtherCommitments).setValue(datarow["otherCommitments"]);
                await (await this.enterTotalCCLimits).waitForExist({ timeout: 500 });
                await (await this.enterTotalCCLimits).setValue(datarow["totalCreditCardLimits"]);
            }
        }

    }

    async clearForm() {
        let actAppType = await (await this.getAppType).getText();
        expect(actAppType).to.equal('Single');
        let actPropype = await (await this.getPropertyType).getText();
        expect(actPropype).to.equal('Home to live in');
        let valueDep = await (await this.selectDependants()).getValue();
        expect(valueDep).to.equal('0');
        let valueInc = await (await this.enterIncome).getValue();
        expect(valueInc).to.equal('0');
        let valueOtherIncome = await (await this.enterOtherIncome).getValue();
        expect(valueOtherIncome).to.equal('0');
        let valueLivExp = await (await this.enterLivingExpenses).getValue();
        expect(valueLivExp).to.equal('0');
        let valueHLR = await (await this.enterHomeLoanRepayments).getValue();
        expect(valueHLR).to.equal('0');
        let valueOLR = await (await this.enterOtherLoanRepayments).getValue();
        expect(valueOLR).to.equal('0');
        let valueCommit = await (await this.enterOtherCommitments).getValue();
        expect(valueCommit).to.equal('0');
        let valueTCCL = await (await this.enterTotalCCLimits).getValue();
        expect(valueTCCL).to.equal('0');
    }

}
export const borrowCalc = new borrowCalculator();