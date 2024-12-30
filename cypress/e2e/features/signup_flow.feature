Feature: Magento Sign-Up and Login Flow

  Scenario: User successfully creates an account
    Given I visit the Magento sign-up page
    When I fill in the sign-up form with valid details
    And I submit the form
    Then I should be redirected to the account dashboard

  Scenario: User tries to create an account with invalid password
    Given I visit the Magento sign-up page
    When I fill in the sign-up form with invalid password
    And I submit the form
    Then I should see an error message about password policy

  Scenario: User logs in with valid credentials
    Given I visit the Magento login page
    When I enter valid credentials
    And I submit the form
    Then I should be logged in and redirected to the account page

  Scenario: User logs in with invalid credentials
    Given I visit the Magento login page
    When I enter invalid credentials
    And I submit the form
    Then I should see an error message

