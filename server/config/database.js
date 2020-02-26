const Sequelize = require("sequelize");
module.exports = new Sequelize(
  `${process.env.DB_URI}`,
  {
    define: {
      timestamps: false,
      freezeTableName: true
    },
    timezone: '+05:30'
  }
);
