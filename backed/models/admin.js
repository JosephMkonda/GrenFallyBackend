'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const Admin = dbConnection.define('admins', {
  
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
}, {

  timestamps: true
});

  
module.exports = Admin