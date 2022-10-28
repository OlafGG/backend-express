const express = require('express');   //Importing Express and faker
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),               //Use facker librari to make datafake
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  return res.status(200).json(products);
});


router.get('/filter', (req, res)=>{
  res.status(200).send('Im a filter');
});

router.get('/:id', (req, res)=>{
  const { id } = req.params;
  return res.status(200).json(
    {
      id,
      name: 'Product 2',
      price: '2000'
    }
  );
});

module.exports = router;