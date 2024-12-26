Feature: Sign In

Scenario: Successful login
  Given I navigate to the "Sign In" page
  When I enter valid credentials
  And I click the "Sign In" button
  Then I should be logged in successfully

Scenario: Failed login with incorrect password
  Given I navigate to the "Sign In" page
  When I enter an incorrect password
  And I click the "Sign In" button
  Then I should see an error message
