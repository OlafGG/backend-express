const express = require('express');   //Importing Express and faker

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res)=>{
  const products = service.find();
  return res.status(200).json(products);
});


router.get('/filter', (req, res)=>{
  res.status(200).send('Im a filter');
});

router.get('/:category', (req, res)=>{
  const { category } = req.params;
  const product = service.findOne(category);
  res.status(200).json(product);
});

router.post('/', (req, res) =>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  res.status(200).json({
    message: 'delete',
    id
  });
});

router.patch('/:id', (req, res) =>{
  const body = req.body;
  const { id } = req.params;
  res.status(200).json({
    message: 'update',
    data: body,
    id
  });
});
module.exports = router;
