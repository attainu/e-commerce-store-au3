const Sequelize = require("sequelize");
const db = require('../config/database')

const Wishlists = db.define(
  "wishlists",
  {
    wishlist_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    wishlist_items: {
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

module.exports = Wishlists;
