Feature: Calculate borrowing capacity reading the data from json file

    Scenario: Launch and initiate borrowing capacity
        Given I launch borrow calc page
        When I enter the data for scenario '1'
        Then I click on calculate button
            And My estimated borrowing capacity should be '$500,000'

    Scenario: Launch and initiate borrowing capacity and start over
        Given I launch borrow calc page
        When I enter the data for scenario '1'
        Then I click on calculate button
            And I click on startOver button
            And Form data should be clear
