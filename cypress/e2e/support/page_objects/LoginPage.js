class LoginPage {
    navigate() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }

    login(email, password) {
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.get('button[title="Sign In"]').click();
    }
}

export default new LoginPage();
