const express = require("express");
const routes = express.Router();

const CarController = require("../Controllers/CarController")
const TripController= require("../Controllers/TripController");
const DriverController = require("../Controllers/DriverController")

//Car routes

routes.post("/admin/car", CarController.store);
routes.get("/admin/car", CarController.index);
routes.put("/admin/car/:id", CarController.change)
routes.delete("/admin/car/:id", CarController.delete)

//Driver routes

routes.post("/admin/driver", DriverController.store);
routes.get("/admin/driver", DriverController.index);
routes.put("/admin/driver/:id", DriverController.change)
routes.delete("/admin/driver/:id", DriverController.delete)

//Trip routes

routes.post("/admin/trip", TripController.store);
routes.get("/admin/trip", TripController.index);
routes.put("/admin/trip/:id", TripController.change)
routes.delete("/admin/trip/:id", TripController.delete)


module.exports = routes;