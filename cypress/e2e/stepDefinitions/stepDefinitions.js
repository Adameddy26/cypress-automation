import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../../support/pageObjects/signupPage';
import LoginPage from '../../support/pageObjects/loginPage';

const signupPage = new SignupPage();
const loginPage = new LoginPage();

// Step definitions for sign-up
Given('I visit the Magento sign-up page', () => {
  signupPage.visit();
});

When('I fill in the sign-up form with valid details', function () {
  cy.fixture('testData').then((data) => {
    const user = data.validUser;
    signupPage.fillSignupForm(user.firstName, user.lastName, user.email, user.password);
  });
});

When('I fill in the sign-up form with invalid password', function () {
  cy.fixture('testData').then((data) => {
    const user = data.invalidUser;
    signupPage.fillSignupForm(user.firstName, user.lastName, user.email, user.password);
  });
});

When('I submit the form', () => {
  signupPage.submit();
});

Then('I should be redirected to the account dashboard', () => {
  signupPage.verifyAccountDashboard();
});

Then('I should see an error message about password policy', () => {
  signupPage.verifyPasswordError();
});

// Step definitions for login
Given('I visit the Magento login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', function () {
  cy.fixture('testData').then((data) => {
    const user = data.validUser;
    loginPage.fillLoginForm(user.email, user.password);
  });
});

When('I enter invalid credentials', function () {
  cy.fixture('testData').then((data) => {
    const user = data.invalidUser;
    loginPage.fillLoginForm(user.email, 'WrongPassword');
  });
});

When('I click on the "Sign In" button', () => {
  loginPage.submit();
});

Then('I should be logged in and redirected to the account page', () => {
  loginPage.verifyLogin();
});

Then('I should see an error message', () => {
  loginPage.verifyLoginError();
});

