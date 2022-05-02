'use strict'

const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Application = dbConnection.define('applications', {

  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
  },
  firstname: {
    type: DataTypes.STRING,
  allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull:false
  },
  regNum: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  social: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  gpa: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  yrofstudy: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  ref: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status:{
    type: DataTypes.STRING,
    allowNull: true
  },
}, {

  timestamps: true
});

module.exports = Application






