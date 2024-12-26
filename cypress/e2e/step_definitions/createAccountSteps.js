import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CreateAccountPage from '../support/page_objects/CreateAccountPage';

Given('I navigate to the "Create an Account" page', () => {
    CreateAccountPage.navigate();
});

When('I fill in the form with valid details', () => {
    CreateAccountPage.fillForm('John', 'Doe', 'john.doe@example.com', 'Password@123', 'Password@123');
});

When('I fill in the form with invalid password', () => {
    CreateAccountPage.fillForm('John', 'Doe', 'john.doe@example.com', 'weakpass', 'weakpass');
});

Then('the account should be created successfully', () => {
    cy.contains('Thank you for registering').should('be.visible');
});

Then('I should see an error message about password policy', () => {
    cy.contains('Minimum of different classes of characters in password is 3').should('be.visible');
});
