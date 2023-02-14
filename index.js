const Trip = require("./models/Trip");

(async () => {
    const Driver = require("./models/Driver");
    const Car = require("./models/Car")

   /* const newDriver = await Driver.create({
    name: "Viny",
    });
    console.log(newDriver);

    const newCar = await Car.create({

        plate: "NYE-0854",
        brand:"Nissan",
        model:"March",
        currentKM:17000,
        nextOilChange:171000
    })
    console.log(newCar)*/
    try {
         const newTrip = await Trip.create({
            date: "2022-01-17",
            from: "PEMSE",
            destination: "UBS",
            startKM: 100000,
            finalKM: 100010,
            notes: "Levar adolescente",
            driverId: 1,
            carId: 1,
        })
        console.log(newTrip)
        
       } catch (error) {
        
        console.log(error)
       }

    })();
