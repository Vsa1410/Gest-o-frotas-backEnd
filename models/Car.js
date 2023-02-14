const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Car = sequelize.define("cars",{
    plate: DataTypes.STRING,
    brand:DataTypes.STRING,
    model:DataTypes.STRING,
    currentKM:DataTypes.INTEGER,
    nextOilChange:DataTypes.INTEGER
});
module.exports = Car