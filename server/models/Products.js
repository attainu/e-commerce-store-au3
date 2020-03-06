const Sequelize = require("sequelize");
const db = require('../config/database')

const Products = db.define(
  "products",
  {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    supplier_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    supplier_address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    reviews: {
      type: Sequelize.JSONB,
      allowNull: false
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true 
  }
);


module.exports = Products;