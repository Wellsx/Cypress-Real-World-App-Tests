import Data from '../../support/data';
import SignIn from '../../POM/pages/sign.in.page';

describe('Sign in happy path', () => {
  it('Sign in with newly registered user', () => {
    cy.visit('/');

    SignIn.typeUsername(Data.lastUser())
      .typePassword(Data.password)
      .clickSignIn();
  });
});
