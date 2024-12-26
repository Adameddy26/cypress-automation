import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../support/page_objects/LoginPage';

Given('I navigate to the "Sign In" page', () => {
    LoginPage.navigate();
});

When('I enter valid credentials', () => {
    LoginPage.login('adam.eddy@example.com', 'Password@123');
});

When('I enter an incorrect password', () => {
    LoginPage.login('adam.eddy@example.com', 'WrongPass123');
});

Then('I should be logged in successfully', () => {
    cy.contains('Welcome, Adam').should('be.visible');
});

Then('I should see an error message', () => {
    cy.contains('The account sign-in was incorrect or your account is disabled temporarily').should('be.visible');
});
