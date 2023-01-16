class SignIn {
  typeUsername(username) {
    cy.get('#username').should('be.visible').type(username);
    return this;
  }
  typePassword(password) {
    cy.get('#password').should('be.visible').type(password);
    return this;
  }
  checkRememberMe() {
    cy.get('[data-test="signin-remember-me"]')
      .should('be.visible')
      .and('not.be.checked')
      .click();
    return this;
  }
  clickSignIn() {
    cy.get('[data-test="signin-submit"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl);
    return this;
  }
  clickLogout() {
    cy.get('[data-test="sidenav-signout"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'signin');
    return this;
  }
}

export default new SignIn();
