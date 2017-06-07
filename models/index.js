"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
//var config    = require(__dirname + '/../config/config.json')[env];
var sequelize = new Sequelize("d8mofmtedli62b", "zznphzzqvvyjhv", '97726edf5cc28c51be94c0955a31c78d9d3f64b76534165d6b89929f3fe59d1b', {
  host: 'ec2-107-20-226-93.compute-1.amazonaws.com:5432',
  dialect: 'postgres',
  native: true
});
var db        = {};

// Change to true to update the model in the database.
// NOTE: This will erase your data.
sequelize.sync({force: true});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;