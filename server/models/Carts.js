const Sequelize = require("sequelize");
const db = require('../config/database')

const Carts = db.define(
  "carts",
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

module.exports = Carts;
