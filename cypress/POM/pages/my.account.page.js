class Account {
  clickMyAccount() {
    cy.get('[data-test="sidenav-user-settings"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'user/settings');
    return this;
  }

  inputNewFirstName(firstName) {
    cy.get('[data-test="user-settings-firstName-input"]')
      .should('be.visible')
      .clear()
      .type(firstName)
      .should('have.value', firstName);
    return this;
  }
  inputNewLastName(lastName) {
    cy.get('[data-test="user-settings-lastName-input"]')
      .should('be.visible')
      .clear()
      .type(lastName)
      .should('have.value', lastName);
    return this;
  }
  inputNewEmailAddress(email) {
    cy.get('[data-test="user-settings-email-input"]')
      .should('be.visible')
      .clear()
      .type(email)
      .should('have.value', email);
    return this;
  }
  inputNewPhoneNumber(number) {
    cy.get('[data-test="user-settings-phoneNumber-input"]')
      .should('be.visible')
      .clear()
      .type(number)
      .should('have.value', number);
    return this;
  }
  clickSave() {
    cy.get('[data-test="user-settings-submit"]').should('be.visible').click();
  }
}
export default new Account();
