const express = require('express');   //Importing Express and faker
const faker = require('faker');

const CategoriesService = require('./../services/categories.services');

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res)=>{
  const categories = service.find();
  return res.status(200).send(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categories = service.findOne(id);
  return res.status(200).json(categories);
});



router.get('/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId } = req.params;
  return res.status(200).json({
    categoryId,
    productId
  });
});

module.exports = router;
