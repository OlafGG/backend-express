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

app.get('/productos', (req, res)=>{
  return res.status(200).json({
    name: 'Producto 1',
    price: '1000'
  });
});

app.listen(port, () => {
  console.log(`Mi port es: ${port}`);
});
