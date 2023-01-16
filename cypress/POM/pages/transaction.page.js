class Transaction {
  createNewTransaction() {
    cy.get('[data-test="nav-top-new-transaction"]')
      .should('be.visible')
      .click();
    cy.url().should('eq', Cypress.config().baseUrl + 'transaction/new');
    return this;
  }
  searchForUser(search) {
    cy.get('[data-test="user-list-search-input"]')
      .should('be.visible')
      .type(search)
      .should('have.value', search);
    return this;
  }
  clickOnUser() {
    cy.get('[data-test="users-list"]').eq(0).should('be.visible').click();
    return this;
  }
  inputTransactionAmount(amount) {
    cy.get('#amount')
      .should('be.visible')
      .type(amount)
      .should('have.value', '$' + amount);
    return this;
  }
  inputTransactionDescription(description) {
    cy.get('#transaction-create-description-input')
      .should('be.visible')
      .type(description)
      .should('have.value', description);
    return this;
  }
  clickRequestButton() {
    cy.get('[data-test="transaction-create-submit-request"]')
      .should('be.visible')
      .click();
    cy.get('[data-test="alert-bar-success"]').should('be.visible');
    return this;
  }
  clickPayButton() {
    cy.get('[data-test="transaction-create-submit-payment"]')
      .should('be.visible')
      .click();
    cy.get('[data-test="alert-bar-success"]').should('be.visible');
    return this;
  }
}
export default new Transaction();
