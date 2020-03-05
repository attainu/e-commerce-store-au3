const Sequelize = require("sequelize");
const db = require('../config/database')
const bcrypt = require('bcryptjs');

const Users = db.define(
  "users",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },    
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    hooks:{
      beforeCreate: async function(users) {
        const salt = await bcrypt.genSalt();
        users.password = await bcrypt.hash(users.password, salt);
      }
    },
  }
);

Users.prototype.validPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}


module.exports = Users
