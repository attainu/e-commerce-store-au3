const Sequelize = require("sequelize");
const db = require('../config/database')

const Cart = db.define(
  "cart",
  {
    cart_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    cart_items: {
      type: Sequelize.JSONB,
      allowNull: true
    },
    user_id: {
      type: Sequelize.INTEGER,      
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = Cart;
