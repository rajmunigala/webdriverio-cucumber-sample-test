Feature: Calculate borrowing capacity using scenario outline

    Scenario Outline: Launch and initiate borrowing capacity
        Given I launch borrow calc page
        When User selects the application type as '<applicationType>'
        And User selects the property type as '<propertyType>'
        And User selects the number of dependants as '<dependants>'
        And Enter income before tax as '<income>'
        And Enter other income as '<otherIncome>'
        And Enter living expenses as '<livingExp>'
        And Enter homeloan repayments as '<hlrepay>'
        And Enter otherloan repayments as '<otherLoanRepay>'
        And Enter other commitments as '<otherCommit>'
        And Enter total credit card limits as '<totalCCLimits>'
        Then I click on calculate button
        And My estimated borrowing capacity should be '<expCapacity>'

        Examples:
            | applicationType | propertyType | dependants | income | otherIncome | livingExp | hlrepay | otherLoanRepay | otherCommit | totalCCLimits | expCapacity |
            | single          | home         | 0          | 80000  | 10000       | 500       | 0       | 100            | 0           | 10000         | $500,000    |

