class Register {
  clickOnSignUp() {
    cy.visit('/');
    cy.get('[data-test="signup"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'signup');
    return this;
  }

  typeFirstName(firstname) {
    cy.get('#firstName')
      .should('be.visible')
      .clear()
      .type(firstname)
      .should('have.value', firstname);
    return this;
  }
  typeLastName(lastname) {
    cy.get('#lastName')
      .should('be.visible')
      .clear()
      .type(lastname)
      .should('have.value', lastname);
    return this;
  }
  typeUsername(username) {
    cy.get('#username')
      .should('be.visible')
      .type(username)
      .should('have.value', username);
    return this;
  }
  typePassword(password) {
    cy.get('#password')
      .should('be.visible')
      .clear()
      .type(password)
      .should('have.value', password);
    return this;
  }
  typeConfirmPassword(password) {
    cy.get('#confirmPassword')
      .should('be.visible')
      .clear()
      .type(password)
      .should('have.value', password);
    return this;
  }
  clickSignUp() {
    cy.get('[data-test="signup-submit"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'signin');
  }
}
export default new Register();
