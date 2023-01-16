import SignIn from '../../POM/pages/sign.in.page';
import Data from '../../support/data';
import Transaction from '../../POM/pages/transaction.page';
describe('Creating a new transaction', () => {
  it('Sign in and create a new pay transaction', () => {
    cy.visit('/');

    SignIn.typeUsername(Data.lastUser())
      .typePassword(Data.password)
      .clickSignIn();
    Transaction.createNewTransaction()
      .clickOnUser()
      .inputTransactionAmount(50)
      .inputTransactionDescription('test')
      .clickPayButton();
  });
});
