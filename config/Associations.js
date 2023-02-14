const Car = require("../models/Car")
const Driver = require("../models/Driver");
const Trip = require("../models/Trip")
/*
Trip.hasOne(Car,{onUpdate:"CASCADE"})
Car.belongsTo(Trip, {foreingKey:"carId", as: "cars"}); 
    
Trip.hasOne(Driver,{ onUpdate:"CASCADE"});
Driver.belongsTo(Trip, {foreingKey:"driverId", as: "drivers"});

module.exports = {Trip, Car, Driver}
*/