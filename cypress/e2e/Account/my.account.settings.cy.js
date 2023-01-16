import Data from '../../support/data';
import SIgnIn from '../../POM/pages/sign.in.page';
import Account from '../../POM/pages/my.account.page';

describe('Edit account credentials', () => {
  it('Sign in and edit account credentials from My Account page', () => {
    cy.visit('/');
    SIgnIn.typeUsername(Data.lastUser())
      .typePassword(Data.password)
      .clickSignIn();
    Account.clickMyAccount()
      .inputNewFirstName(Data.firstName)
      .inputNewLastName(Data.lastName)
      .inputNewEmailAddress(Data.email)
      .inputNewPhoneNumber(Data.phoneNumber)
      .clickSave();
  });
});
