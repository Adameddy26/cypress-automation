Feature: Create an Account

Scenario: Successful account creation
  Given I navigate to the "Create an Account" page
  When I fill in the form with valid details
  And I click the "Create an Account" button
  Then the account should be created successfully

Scenario: Attempt account creation with a weak password
  Given I navigate to the "Create an Account" page
  When I fill in the form with invalid password
  And I click the "Create an Account" button
  Then I should see an error message about password policy
