import { faker } from '@faker-js/faker';
import moment from 'moment';

faker.locale = 'en_GB';

moment.locale('en-gb');

class Data {
  today = moment().format('L');

  // Time stamp initialization
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  uniqueEmailAddress = 'test+_' + this.getUnixTimeStamp() + '@testing.com';

  faker = faker;

  device = 'macbook-15';

  email = faker.internet.email();

  firstName = faker.name.firstName();

  userName = faker.internet.userName();

  lastName = faker.name.lastName();

  address = faker.address.streetAddress();

  bankName = faker.finance.accountName();

  accountNumber = faker.finance.account(9);

  routingNumber = faker.finance.routingNumber();

  password = 'Pass123';

  city = faker.address.cityName();

  phoneNumber = faker.phone.phoneNumber('387 ## ### ###');

  userEmail = 'test456123@email23.com';

  userPassword = '123456';

  save_user(username) {
    cy.readFile('cypress/fixtures/users.json').then((records) => {
      records.users.push({
        username: username,
      });

      cy.writeFile('cypress/fixtures/users.json', records);
    });
  }

  // save_price(user) {
  //   cy.readFile('cypress/fixtures/automation_users.json').then((records) => {
  //     records[userName].productPrice = finalPrice;
  //     cy.writeFile('cypress/fixtures/automation_users.json', records);
  //   });
  // }

  lastUser() {
    const records = require('../fixtures/users.json');

    let candidate = records.users.length - 1;
    let lastUser = records.users[candidate].username;

    return lastUser;
  }

  //male_gender = 'male';
  //female_gender = 'female';
}

export default new Data();
