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
    cy.url().should('include', '/customer/account/');
  }

  verifyLoginError() {
    cy.get('.error-msg').should('contain', 'Invalid login or password.');
  }
}

export default LoginPage;

