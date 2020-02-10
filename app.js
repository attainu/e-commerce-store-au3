const express = require("express");
const app = express();
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT;

//database Connection
const db = require("./db/database.js");
const Products = require("./db/models/Products");
const Categories = require("./db/models/Categories");

db.authenticate()
  .then(() => {
    console.log("Connection to DB has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the DB:", err);
  });

app.listen(PORT || 3001);

app.use(cors());


Categories.hasMany(Products, {
  foreignKey: 'category_id'
});

app.get('/', async (req, res)=>{
  const products = await Products.findAll();
  res.send(products);
});

app.get('/men', async (req, res)=>{
  await Categories.findAll({
    attributes: ['category_id', 'category_name'],
    include: [{
      model: Products,
      required: true,
      attributes:[]
     }]
  }).then( cat => {
    res.send(cat);
  });
});

app.get('/men/:id', async (req, res) => {
  const id = req.params.id;  
  await Categories.findAll({
    where:{
      category_id:id
    },
    include: [{
      model: Products,
      required: true,
     }]
  }).then(prod => {
    res.send(prod );
  });
});