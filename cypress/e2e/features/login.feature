Feature: User Login

  Scenario: Successful Login
    Given I visit the Magento login page
    When I enter valid credentials
    And I click on the "Sign In" button
    Then I should be logged in and redirected to the account page

  Scenario: Login with invalid credentials
    Given I visit the Magento login page
    When I enter invalid credentials
    And I click on the "Sign In" button
    Then I should see an error message

