import Data from '../../support/data';
import SignIn from '../../POM/pages/sign.in.page';

describe('Sign out happy path', () => {
  it('Sign in with newly registered user and sign out', () => {
    cy.visit('/');

    SignIn.typeUsername(Data.lastUser())
      .typePassword(Data.password)
      .clickSignIn()
      .clickLogout();
  });
});
