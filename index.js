const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  return res.status(200).send('Hola mi server en express');
});

app.get('/home', (req, res)=>{
  return res.status(200).send('Home')
});

app.get('/categories', (req, res)=>{
  return res.status(200).send('Hola, soy una categoria')
});

app.get('/nueva-ruta', (req, res)=>{
  return res.status(200).send('Hola, soy una nueva ruta')
});

app.get('/people', (req, res) => {
  res.json([{
      name: 'Arturo',
      type: 'employee'
  }, {
      name: 'Jimena',
      type: 'customer'
  }]);
});

app.get('/users', (req, res)=>{
  const { limit, offset } = req.query;
  if (limit && offset) {
    return res.status(200).json({
      limit,
      offset
    });
  }else {
    return res.status(200).send('No hay nada mano')
  }
});

app.get('/products', (req, res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  return res.status(200).json(products);
});


app.get('products/filter', (req, res)=>{
  res.status(200).send('soy un filtro');
});

app.get('/products/:id', (req, res)=>{
  const { id } = req.params;
  return res.status(200).json(
    {
      id,
      name: 'Producto 2',
      price: '2000'
    }
  );
});

app.get('/categories/:categoryId', (req, res) => {
  const {categoryId} = req.params;
  console.log(categoryId);
  if (categoryId === 1) {
    res.json({
      categoryId,
      name: 'Food',
      products: 1000
    })
  }
  res.json({
    categoryId,
    name: 'Others',
    products: 2000
  })
});



app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId } = req.params;
  return res.status(200).json({
    categoryId,
    productId
  });
});



app.get('/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Arturo',
      type: 'employee'
  });
});

app.listen(port, () => {
  console.log(`Mi port es: ${port}`);
});
