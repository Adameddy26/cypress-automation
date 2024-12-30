Feature: User Signup

  Scenario: Successful Signup
    Given I visit the Magento sign-up page
    When I fill in the sign-up form with valid details
    And I submit the form
    Then I should be redirected to the account dashboard

  Scenario: Signup with invalid password
    Given I visit the Magento sign-up page
    When I fill in the sign-up form with invalid password
    And I submit the form
    Then I should see an error message about password policy
