const express = require("express");
const app = express();
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT;

//database Connection
const db = require("./db/database.js");
const Products = require("./db/models/Products");
db.authenticate()
  .then(() => {
    console.log("Connection to DB has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the DB:", err);
  });

app.listen(PORT || 3001);

app.use(cors());

app.get('/', async (req, res)=>{
  const products = await Products.findAll();
  res.send(products);
});