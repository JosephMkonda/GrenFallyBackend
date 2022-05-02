'use strict'

const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Course = dbConnection.define('beneficiaries', {

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
  }
}, {

  timestamps: true
});

module.exports = Course