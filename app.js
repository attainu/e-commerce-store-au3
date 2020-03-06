const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT;

//database Connection
const db = require("./server/config/database");

db.authenticate()
  .then(() => {
    console.log("Connection to DB has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the DB:", err);
  });

app.listen(PORT || 3001);
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Get Routes
let product = require("./server/routes/products");
let categories = require("./server/routes/categories");
let signup = require("./server/routes/auth/signup");
let login = require("./server/routes/auth/login");
let cart = require("./server/routes/cart");
let affiliaions = require("./server/routes/affiliations");
let orders = require("./server/routes/orders");
let profile = require("./server/routes/profile");
let wishlist = require("./server/routes/wishlist");

//middlewares
const verifyToken = require("./server/middlewares/auth.middleware").verifyToken;

app.use("/auth", signup);
app.use("/auth", login);
app.use("/product", product);
app.use("/categories", categories);
app.use("/cart", verifyToken, cart);
app.use("/affiliations", verifyToken, affiliaions);
app.use("/orders", verifyToken, orders);
app.use("/wishlist", verifyToken, wishlist);
app.use("/profile", verifyToken, profile);
