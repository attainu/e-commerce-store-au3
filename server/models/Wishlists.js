const Sequelize = require("sequelize");
const db = require('../config/database')

const Wishlists = db.define(
  "wishlist",
  {
    wishlist_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    wishlist_items: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
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
