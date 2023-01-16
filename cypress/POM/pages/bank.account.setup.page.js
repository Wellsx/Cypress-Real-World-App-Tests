class BankAccount {
  verifyGetStartedDialog() {
    cy.get('[data-test="user-onboarding-dialog"]').should('be.visible');
    return this;
  }
  clickNext() {
    cy.get('[data-test="user-onboarding-next"]').should('be.visible').click();
    cy.get('[data-test="user-onboarding-dialog-content"]').should('be.visible');
    return this;
  }
  typeBankName(bankname) {
    cy.get('#bankaccount-bankName-input')
      .should('be.visible')
      .type(bankname)
      .should('have.value', bankname);
    return this;
  }
  typeRoutingNumber(routingnumber) {
    cy.get('#bankaccount-routingNumber-input')
      .should('be.visible')
      .type(routingnumber)
      .should('have.value', routingnumber);
    return this;
  }
  typeAccountNumber(accountnumber) {
    cy.get('#bankaccount-accountNumber-input')
      .should('be.visible')
      .type(accountnumber)
      .should('have.value', accountnumber);
    return this;
  }
  clickSave() {
    cy.get('[data-test="bankaccount-submit"]').should('be.visible').click();
    cy.get('[data-test="user-onboarding-dialog-title"]')
      .should('be.visible')
      .children()
      .should('contain', 'Finished');
    return this;
  }
  clickDone() {
    cy.get('[data-test="user-onboarding-next"]').should('be.visible').click();
    cy.get('#root').should('not.have.attr', '[aria-hidden="true"]');
    return this;
  }

  clickBankAccountButton() {
    cy.get('[data-test="sidenav-bankaccounts"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'bankaccounts');
    return this;
  }
  clickCreateButton() {
    cy.get('[data-test="bankaccount-new"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'bankaccounts/new');
    return this;
  }
  clickSaveButton() {
    cy.get('[data-test="bankaccount-submit"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'bankaccounts');

    return this;
  }
}
export default new BankAccount();
