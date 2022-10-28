const express = require('express');   //Importing Express and faker
const faker = require('faker');

const router = express.Router();


router.get('/', (req, res)=>{
  return res.status(200).send('Its categories');
});

router.get('/:categoryId', (req, res) => {
  const {categoryId} = req.params;
  console.log(categoryId);
  if (categoryId === 1) {
    return res.status(200).json({
      categoryId,
      name: 'Food',
      products: 1000
    })
  }
  return res.status(200).json({
    categoryId,
    name: 'Others',
    products: 2000
  })
});



router.get('/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId } = req.params;
  return res.status(200).json({
    categoryId,
    productId
  });
});

module.exports = router;
