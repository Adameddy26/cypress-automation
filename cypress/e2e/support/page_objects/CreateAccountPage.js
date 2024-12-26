class CreateAccountPage {
    navigate() {
        cy.visit('/customer/account/create/');
    }

    fillForm(firstName, lastName, email, password, confirmPassword) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(confirmPassword);
    }

    submit() {
        cy.get('button[title="Create an Account"]').click();
    }
}

export default new CreateAccountPage();
