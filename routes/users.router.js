const express = require('express');   //Importing Express and faker
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const limit = 10;
  const users = [];
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.findName(),
      address: faker.address.streetAddress(),   //Use facker librari to make datafake
      Email:  faker.internet.email(),
      Card: faker.helpers.createCard(),
    });

  }
  return res.status(200).json(users);
});

router.get('/limits', (req, res)=>{
  const { limit, offset } = req.query;
  if (limit && offset) {
    return res.status(200).json({
      limit,
      offset
    });
  }else {
    return res.status(200).send('Nothing at users');
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Arturo',
      type: 'employee'
  });
});

module.exports = router;
