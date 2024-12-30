class LoginPage {
  visit() {
    cy.visit('/customer/account/login/');
  }

  fillLoginForm(email, password) {
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
  }

  submit() {
    cy.get('button[title="Sign In"]').click();
  }

  verifyLogin() {
    cy.url().should('include', '/customer/account');
    cy.contains('Welcome').should('be.visible');
  }

  verifyLoginError() {
    cy.contains('Invalid login or password').should('be.visible');
  }
}

export default LoginPage;

