import { Given, When, Then } from 'cucumber';
import { borrowCalc } from '../pages/borrowCalculator.page';
import { expect } from 'chai';


When(/^User selects the application type as '(.*)'$/, { timeout: 60 *1000 }, async(appType: string) => {
    await (await borrowCalc.selectApplicationType(appType)).click();
});

Then(/^User selects the property type as '(.*)'$/, { timeout: 60 *1000 }, async(propType: string) => {
    await (await borrowCalc.selectPropertyType(propType)).waitForClickable();
    await (await borrowCalc.selectPropertyType(propType)).click();
});

Then(/^User selects the number of dependants as '(.*)'$/, { timeout: 60 *1000 }, async(dependants: string) => {
    await (await borrowCalc.selectDependants()).waitForClickable();
    await (await borrowCalc.selectDependants()).click();
    await (await borrowCalc.selectDependants()).selectByVisibleText(dependants);
});

Then(/^Enter income before tax as '(.*)'$/, { timeout: 60 *1000 }, async(income: string) => {
    await (await borrowCalc.enterIncome).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterIncome).setValue(income);
});

Then(/^Enter other income as '(.*)'$/, { timeout: 60 *1000 }, async(otherIncome: string) => {
    await (await borrowCalc.enterOtherIncome).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterOtherIncome).setValue(otherIncome);
});

Then(/^Enter living expenses as '(.*)'$/, { timeout: 60 *1000 }, async(livingExp: string) => {
    await (await borrowCalc.enterLivingExpenses).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterLivingExpenses).setValue(livingExp);
});
Then(/^Enter homeloan repayments as '(.*)'$/, { timeout: 60 *1000 }, async(hlRepayment: string) => {
    await (await borrowCalc.enterHomeLoanRepayments).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterHomeLoanRepayments).setValue(hlRepayment);
});
Then(/^Enter otherloan repayments as '(.*)'$/, { timeout: 60 *1000 }, async(otherLoanRepayment: string) => {
    await (await borrowCalc.enterOtherLoanRepayments).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterOtherLoanRepayments).setValue(otherLoanRepayment);
});
Then(/^Enter other commitments as '(.*)'$/, { timeout: 60 *1000 }, async(otherCommit: string) => {
    await (await borrowCalc.enterOtherCommitments).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterOtherCommitments).setValue(otherCommit);
});
Then(/^Enter total credit card limits as '(.*)'$/, { timeout: 60 *1000 }, async(totalCCLimit: string) => {
    await (await borrowCalc.enterTotalCCLimits).waitForExist({ timeout: 500 });
    await (await borrowCalc.enterTotalCCLimits).setValue(totalCCLimit);
});


Then(/^I click on calculate button$/, () => {
    borrowCalc.workoutHowMuch.waitForClickable();
    borrowCalc.workoutHowMuch.click();
    browser.pause(1000);
});

Then(/^My estimated borrowing capacity should be '(.*)'$/, { timeout: 60 *1000 }, async(borrowCapacity: string) => {
    await (await borrowCalc.estimatedBorrowCapacity).waitForExist({ timeout: 5000 });
    var bCap = await (await borrowCalc.estimatedBorrowCapacity).getText();
    var msgFlag = bCap.includes('$500,000');
    await expect(msgFlag).to.equal(true);
});

When(/^I enter the data for scenario '(.*)'$/, { timeout: 60 *1000 }, async(scenarioId: string) => {
    await borrowCalc.calculateBC(scenarioId);
});

Then(/^I click on startOver button$/, () => {
    borrowCalc.startOver.waitForClickable();
    borrowCalc.startOver.click();
});

When(/^Form data should be clear$/, { timeout: 60 *1000 }, async() => {
    await borrowCalc.clearForm();
});