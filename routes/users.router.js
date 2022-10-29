const express = require('express');   //Importing Express and faker
const faker = require('faker');

const UsersService = require('./../services/users.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  return res.status(200).json(users);
});

/*
USING LIMITS

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
});*/

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const users = service.findOne(id);
  return res.status(200).json(users)
});

module.exports = router;
