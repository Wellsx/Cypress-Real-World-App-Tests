import Data from '../../support/data';
import SignIn from '../../POM/pages/sign.in.page';
import BankAccount from '../../POM/pages/bank.account.setup.page';

describe('Sign in and create a bank account', () => {
  it('Sign in with newly registered user and create bank account', () => {
    cy.visit('/');

    SignIn.typeUsername(Data.lastUser())
      .typePassword(Data.password)
      .clickSignIn();
    BankAccount.clickNext()
      .typeBankName(Data.bankName)
      .typeRoutingNumber(Data.routingNumber)
      .typeAccountNumber(Data.accountNumber)
      .clickSave()
      .clickDone();
  });
});
