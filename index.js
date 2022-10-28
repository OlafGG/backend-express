const express = require('express');   //Importing Express and faker
const routerApi = require('./routes');

const app = express();
const port = 3000;


//First get from aplication
app.get('/', (req, res) =>{
  return res.status(200).send('Hi, this is my server');
});

app.get('/nueva-ruta', (req, res) => {
  return res.status(200).send('Hola, soy una nueva ruta');
});

routerApi(app);


app.listen(port, () => {
  console.log(`My port is: ${port}`);    //Using ECMAScript 6 to make easier to read
});
