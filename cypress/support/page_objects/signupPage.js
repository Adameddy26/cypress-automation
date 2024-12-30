class SignupPage {
  visit() {
    cy.visit('/customer/account/create/');
  }

  fillSignupForm(firstName, lastName, email, password) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }

  submit() {
    cy.get('button[title="Create an Account"]').click();
  }

  verifyAccountDashboard() {
    cy.url().should('include', '/customer/account');
    cy.contains('My Account').should('be.visible');
  }

  verifyPasswordError() {
    cy.contains('Minimum of different classes of characters in password is 3').should('be.visible');
  }
}

export default SignupPage;

