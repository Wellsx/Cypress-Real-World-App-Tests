import SignUp from '../../POM/pages/registration.page';
import Data from '../../support/data';

describe('Registration flow', () => {
  it('Register a new user and save account to json', () => {
    SignUp.clickOnSignUp()
      .typeFirstName(Data.firstName)
      .typeLastName(Data.lastName)
      .typeUsername(Data.userName)
      .typePassword(Data.password)
      .typeConfirmPassword(Data.password)
      .clickSignUp();

    Data.save_user(Data.userName);
  });
});
