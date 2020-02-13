const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

require("dotenv").config();
const PORT = process.env.PORT;

//database Connection
const db = require("./server/config/database");

db.authenticate()
    .then(() => {
        console.log("Connection to DB has been established successfully.");
        app.use(cors());
        app.listen(PORT || 3001);
    })
    .catch(err => {
        console.error("Unable to connect to the DB:", err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))


// Get Routes
let product = require('./server/routes/products');
let categories = require('./server/routes/categories');
let signup = require('./server/routes/auth/signup');
let login = require('./server/routes/auth/login');

app.use('/auth', signup);
app.use('/auth', login);
app.use('/product',product);
app.use('/product/:id',product);
app.use('/categories', categories);


// const verifyToken = require('./server/middlewares/auth.middleware').verifyToken;
// app.get("/cart", verifyToken, (req, res)=> {
//   res.json({payload :req.payload, message:"Inside Cart"});
// });
