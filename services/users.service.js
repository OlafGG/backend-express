const faker = require('faker');
const { fa } = require('faker/lib/locales');

class UsersService {

  constructor(){
    this.users = []
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        address: faker.address.streetAddress(),   //Use facker librari to make datafake
        Email:  faker.internet.email(),
        Card: faker.helpers.createCard(),
      });
    }
  }

  create(){

  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.find(item => item.id === id);
  }

  update(){

  }
  delete(){

  }
}

module.exports = UsersService;
