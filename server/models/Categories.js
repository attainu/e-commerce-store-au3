const Sequelize = require("sequelize");
const db = require('../config/database')

const Categories = db.define(
  "categories",
  {
    category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    category_name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = Categories;
