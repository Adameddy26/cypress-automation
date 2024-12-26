import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../support/page_objects/LoginPage';

Given('I navigate to the "Sign In" page', () => {
    LoginPage.navigate();
});

When('I enter valid credentials', () => {
    LoginPage.login('john.doe@example.com', 'Password@123');
});

When('I enter an incorrect password', () => {
    LoginPage.login('john.doe@example.com', 'WrongPass123');
});

Then('I should be logged in successfully', () => {
    cy.contains('Welcome, John').should('be.visible');
});

Then('I should see an error message', () => {
    cy.contains('Invalid login or password').should('be.visible');
});
