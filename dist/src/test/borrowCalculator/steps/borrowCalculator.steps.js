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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var borrowCalculator_page_1 = require("../pages/borrowCalculator.page");
var chai_1 = require("chai");
cucumber_1.When(/^User selects the application type as '(.*)'$/, { timeout: 60 * 1000 }, function (appType) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.selectApplicationType(appType)];
            case 1: return [4, (_a.sent()).click()];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^User selects the property type as '(.*)'$/, { timeout: 60 * 1000 }, function (propType) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.selectPropertyType(propType)];
            case 1: return [4, (_a.sent()).waitForClickable()];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.selectPropertyType(propType)];
            case 3: return [4, (_a.sent()).click()];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^User selects the number of dependants as '(.*)'$/, { timeout: 60 * 1000 }, function (dependants) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.selectDependants()];
            case 1: return [4, (_a.sent()).waitForClickable()];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.selectDependants()];
            case 3: return [4, (_a.sent()).click()];
            case 4:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.selectDependants()];
            case 5: return [4, (_a.sent()).selectByVisibleText(dependants)];
            case 6:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter income before tax as '(.*)'$/, { timeout: 60 * 1000 }, function (income) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterIncome];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterIncome];
            case 3: return [4, (_a.sent()).setValue(income)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter other income as '(.*)'$/, { timeout: 60 * 1000 }, function (otherIncome) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterOtherIncome];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterOtherIncome];
            case 3: return [4, (_a.sent()).setValue(otherIncome)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter living expenses as '(.*)'$/, { timeout: 60 * 1000 }, function (livingExp) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterLivingExpenses];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterLivingExpenses];
            case 3: return [4, (_a.sent()).setValue(livingExp)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter homeloan repayments as '(.*)'$/, { timeout: 60 * 1000 }, function (hlRepayment) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterHomeLoanRepayments];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterHomeLoanRepayments];
            case 3: return [4, (_a.sent()).setValue(hlRepayment)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter otherloan repayments as '(.*)'$/, { timeout: 60 * 1000 }, function (otherLoanRepayment) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterOtherLoanRepayments];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterOtherLoanRepayments];
            case 3: return [4, (_a.sent()).setValue(otherLoanRepayment)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter other commitments as '(.*)'$/, { timeout: 60 * 1000 }, function (otherCommit) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterOtherCommitments];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterOtherCommitments];
            case 3: return [4, (_a.sent()).setValue(otherCommit)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^Enter total credit card limits as '(.*)'$/, { timeout: 60 * 1000 }, function (totalCCLimit) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.enterTotalCCLimits];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.enterTotalCCLimits];
            case 3: return [4, (_a.sent()).setValue(totalCCLimit)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^I click on calculate button$/, function () {
    borrowCalculator_page_1.borrowCalc.workoutHowMuch.waitForClickable();
    borrowCalculator_page_1.borrowCalc.workoutHowMuch.click();
    browser.pause(1000);
});
cucumber_1.Then(/^My estimated borrowing capacity should be '(.*)'$/, { timeout: 60 * 1000 }, function (borrowCapacity) { return __awaiter(void 0, void 0, void 0, function () {
    var bCap, msgFlag;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.estimatedBorrowCapacity];
            case 1: return [4, (_a.sent()).waitForExist({ timeout: 5000 })];
            case 2:
                _a.sent();
                return [4, borrowCalculator_page_1.borrowCalc.estimatedBorrowCapacity];
            case 3: return [4, (_a.sent()).getText()];
            case 4:
                bCap = _a.sent();
                msgFlag = bCap.includes('$500,000');
                return [4, chai_1.expect(msgFlag).to.equal(true)];
            case 5:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.When(/^I enter the data for scenario '(.*)'$/, { timeout: 60 * 1000 }, function (scenarioId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.calculateBC(scenarioId)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^I click on startOver button$/, function () {
    borrowCalculator_page_1.borrowCalc.startOver.waitForClickable();
    borrowCalculator_page_1.borrowCalc.startOver.click();
});
cucumber_1.When(/^Form data should be clear$/, { timeout: 60 * 1000 }, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, borrowCalculator_page_1.borrowCalc.clearForm()];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); });
//# sourceMappingURL=borrowCalculator.steps.js.map