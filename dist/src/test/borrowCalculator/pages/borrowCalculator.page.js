"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.borrowCalc = void 0;
var fs = __importStar(require("fs"));
var chai_1 = require("chai");
var borrowCalculator = (function () {
    function borrowCalculator() {
    }
    Object.defineProperty(borrowCalculator.prototype, "workoutHowMuch", {
        get: function () {
            return $('#btnBorrowCalculater');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterIncome", {
        get: function () {
            return $('input[aria-labelledby=q2q1]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterOtherIncome", {
        get: function () {
            return $('input[aria-labelledby=q2q2]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterLivingExpenses", {
        get: function () {
            return $('input[aria-labelledby=q3q1]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterHomeLoanRepayments", {
        get: function () {
            return $('input[aria-labelledby=q3q2]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterOtherLoanRepayments", {
        get: function () {
            return $('input[aria-labelledby=q3q3]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterOtherCommitments", {
        get: function () {
            return $('input[aria-labelledby=q3q4]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "enterTotalCCLimits", {
        get: function () {
            return $('input[aria-labelledby=q3q5]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "estimatedBorrowCapacity", {
        get: function () {
            return $('#main-container div:nth-child(3) span.borrow__result__text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "startOver", {
        get: function () {
            return $('button[class=start-over]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "getAppType", {
        get: function () {
            return $('#main-container div:nth-child(2) > ul > li.selected > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(borrowCalculator.prototype, "getPropertyType", {
        get: function () {
            return $('#main-container div.borrow__question.borrow__question--tall > ul > li.selected > label');
        },
        enumerable: false,
        configurable: true
    });
    borrowCalculator.prototype.selectApplicationType = function (appType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, $('label[for=application_type_' + appType + ']')];
            });
        });
    };
    borrowCalculator.prototype.selectPropertyType = function (propType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, $('label[for=borrow_type_' + propType + ']')];
            });
        });
    };
    borrowCalculator.prototype.selectDependants = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, $('select[title="Number of dependants"]')];
            });
        });
    };
    borrowCalculator.prototype.calculateBC = function (scenarioId) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonData, parseData, i, datarow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jsonData = fs.readFileSync('src/data/borrowCalculator/testData.json', "utf-8");
                        parseData = JSON.parse(jsonData);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < parseData.datarows.length)) return [3, 45];
                        datarow = parseData.datarows[i];
                        if (!(datarow.SCENARIO_ID == scenarioId)) return [3, 44];
                        return [4, this.selectApplicationType(datarow["applicationType"])];
                    case 2: return [4, (_a.sent()).waitForClickable()];
                    case 3:
                        _a.sent();
                        return [4, this.selectApplicationType(datarow["applicationType"])];
                    case 4: return [4, (_a.sent()).click()];
                    case 5:
                        _a.sent();
                        return [4, this.selectPropertyType(datarow["propertyType"])];
                    case 6: return [4, (_a.sent()).waitForClickable()];
                    case 7:
                        _a.sent();
                        return [4, this.selectPropertyType(datarow["propertyType"])];
                    case 8: return [4, (_a.sent()).click()];
                    case 9:
                        _a.sent();
                        return [4, this.selectDependants()];
                    case 10: return [4, (_a.sent()).waitForClickable()];
                    case 11:
                        _a.sent();
                        return [4, this.selectDependants()];
                    case 12: return [4, (_a.sent()).click()];
                    case 13:
                        _a.sent();
                        return [4, this.selectDependants()];
                    case 14: return [4, (_a.sent()).selectByVisibleText(datarow["dependants"])];
                    case 15:
                        _a.sent();
                        return [4, this.enterIncome];
                    case 16: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 17:
                        _a.sent();
                        return [4, this.enterIncome];
                    case 18: return [4, (_a.sent()).setValue(datarow["income"])];
                    case 19:
                        _a.sent();
                        return [4, this.enterOtherIncome];
                    case 20: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 21:
                        _a.sent();
                        return [4, this.enterOtherIncome];
                    case 22: return [4, (_a.sent()).setValue(datarow["otherIncome"])];
                    case 23:
                        _a.sent();
                        return [4, this.enterLivingExpenses];
                    case 24: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 25:
                        _a.sent();
                        return [4, this.enterLivingExpenses];
                    case 26: return [4, (_a.sent()).setValue(datarow["livingExpenses"])];
                    case 27:
                        _a.sent();
                        return [4, this.enterHomeLoanRepayments];
                    case 28: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 29:
                        _a.sent();
                        return [4, this.enterHomeLoanRepayments];
                    case 30: return [4, (_a.sent()).setValue(datarow["currentHomeLoanRepayments"])];
                    case 31:
                        _a.sent();
                        return [4, this.enterOtherLoanRepayments];
                    case 32: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 33:
                        _a.sent();
                        return [4, this.enterOtherLoanRepayments];
                    case 34: return [4, (_a.sent()).setValue(datarow["otherLoanRepayments"])];
                    case 35:
                        _a.sent();
                        return [4, this.enterOtherCommitments];
                    case 36: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 37:
                        _a.sent();
                        return [4, this.enterOtherCommitments];
                    case 38: return [4, (_a.sent()).setValue(datarow["otherCommitments"])];
                    case 39:
                        _a.sent();
                        return [4, this.enterTotalCCLimits];
                    case 40: return [4, (_a.sent()).waitForExist({ timeout: 500 })];
                    case 41:
                        _a.sent();
                        return [4, this.enterTotalCCLimits];
                    case 42: return [4, (_a.sent()).setValue(datarow["totalCreditCardLimits"])];
                    case 43:
                        _a.sent();
                        _a.label = 44;
                    case 44:
                        i++;
                        return [3, 1];
                    case 45: return [2];
                }
            });
        });
    };
    borrowCalculator.prototype.clearForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actAppType, actPropype, valueDep, valueInc, valueOtherIncome, valueLivExp, valueHLR, valueOLR, valueCommit, valueTCCL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getAppType];
                    case 1: return [4, (_a.sent()).getText()];
                    case 2:
                        actAppType = _a.sent();
                        chai_1.expect(actAppType).to.equal('Single');
                        return [4, this.getPropertyType];
                    case 3: return [4, (_a.sent()).getText()];
                    case 4:
                        actPropype = _a.sent();
                        chai_1.expect(actPropype).to.equal('Home to live in');
                        return [4, this.selectDependants()];
                    case 5: return [4, (_a.sent()).getValue()];
                    case 6:
                        valueDep = _a.sent();
                        chai_1.expect(valueDep).to.equal('0');
                        return [4, this.enterIncome];
                    case 7: return [4, (_a.sent()).getValue()];
                    case 8:
                        valueInc = _a.sent();
                        chai_1.expect(valueInc).to.equal('0');
                        return [4, this.enterOtherIncome];
                    case 9: return [4, (_a.sent()).getValue()];
                    case 10:
                        valueOtherIncome = _a.sent();
                        chai_1.expect(valueOtherIncome).to.equal('0');
                        return [4, this.enterLivingExpenses];
                    case 11: return [4, (_a.sent()).getValue()];
                    case 12:
                        valueLivExp = _a.sent();
                        chai_1.expect(valueLivExp).to.equal('0');
                        return [4, this.enterHomeLoanRepayments];
                    case 13: return [4, (_a.sent()).getValue()];
                    case 14:
                        valueHLR = _a.sent();
                        chai_1.expect(valueHLR).to.equal('0');
                        return [4, this.enterOtherLoanRepayments];
                    case 15: return [4, (_a.sent()).getValue()];
                    case 16:
                        valueOLR = _a.sent();
                        chai_1.expect(valueOLR).to.equal('0');
                        return [4, this.enterOtherCommitments];
                    case 17: return [4, (_a.sent()).getValue()];
                    case 18:
                        valueCommit = _a.sent();
                        chai_1.expect(valueCommit).to.equal('0');
                        return [4, this.enterTotalCCLimits];
                    case 19: return [4, (_a.sent()).getValue()];
                    case 20:
                        valueTCCL = _a.sent();
                        chai_1.expect(valueTCCL).to.equal('0');
                        return [2];
                }
            });
        });
    };
    return borrowCalculator;
}());
exports.borrowCalc = new borrowCalculator();
//# sourceMappingURL=borrowCalculator.page.js.map