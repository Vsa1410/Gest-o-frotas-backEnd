const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Driver = sequelize.define("drivers",{
    name: DataTypes.STRING,
});

module.exports = Driver