const faker = require('faker');

class CategoriesService {

  constructor(){
    this.categories = []
    this.generate();
  }

  generate(){
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        category: faker.vehicle.bicycle() || faker.vehicle.manufacturer(),               //Use facker librari to make datafake
        image: faker.image.imageUrl(),
      });
    }

  }

  create(){

  }

  find(){
    return this.categories;
  }

  findOne(id){
    return this.categories.find(item => item.id === id);
  }

  update(){

  }
  delete(){

  }
}

module.exports = CategoriesService;
