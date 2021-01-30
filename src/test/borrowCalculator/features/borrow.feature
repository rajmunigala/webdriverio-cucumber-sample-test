Feature: Calculate borrowing capacity passing values directly

    Scenario: Launch and initiate borrowing capacity
        Given I launch borrow calc page
        And Enter income before tax as '80000'
        And Enter other income as '10000'
        And Enter living expenses as '500'
        And Enter otherloan repayments as '100'
        And Enter total credit card limits as '10000'
        Then I click on calculate button
        And My estimated borrowing capacity should be '$500,000'
