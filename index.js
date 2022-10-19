const express = require('express');
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

app.get('/products', (req, res)=>{
  return res.status(200).json([
    {
      name: 'Producto 1',
      price: '1000'
    },
    {
      name: 'Producto 2',
      price: '2000'
    }
  ]);
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
})

app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId } = req.params;
  return res.status(200).json({
    categoryId,
    productId
  });
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
