const {DataTypes} =require("sequelize");
const sequelize = require("../config/sequelize")

const Trip = sequelize.define("trips", {
    date: DataTypes.DATE,
    from: DataTypes.STRING,
    destination: DataTypes.STRING,
    departure: DataTypes.DATE,
    arrive: DataTypes.DATE,
    startKM: DataTypes.INTEGER,
    finalKM: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    driverId: DataTypes.INTEGER,
    carId: DataTypes. INTEGER,
})

module.exports = Trip