const Sequelize = require("sequelize");
const db = require('../config/database')

const Affiliations = db.define(
  "affiliations",
  {
    affiliate_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    affiliations: {
      type: Sequelize.JSON,
      allowNull: true
    },
    revenue_generated: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = Affiliations;
