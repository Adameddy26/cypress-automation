import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../page_objects/LoginPage';
const loginPage = new LoginPage();
Given('I open the login page', () => {
    loginPage.visit();
});

When('I enter valid credentials', () => {
    loginPage.login('adam.eddy@example.com', 'Password@123');
});

When('I enter an incorrect password', () => {
    loginPage.login('adam.eddy@example.com', 'WrongPass123');
});

Then('I submit the login form', () => {
  loginPage.submit();
});

Then('I should be logged in successfully', () => {
    cy.contains('Welcome, Adam').should('be.visible');
});

Then('I should see an error message', () => {
    cy.contains('The account sign-in was incorrect or your account is disabled temporarily').should('be.visible');
});
