const Trip = require("../models/Trip");

module.exports={
    async store( req, res){
        const {date,from,destination,departure, arrive,startKM,finalKM,notes,driverId,carId} = req.body;

        const trip = await Trip.create({date,from,destination,departure, arrive,startKM,finalKM,notes,driverId,carId})

        return res.json(trip);
    },
    async index(req,res){
        const trip = await Trip.findAll();
        return res.json(trip);
    },
    async change(req,res){
        const {date,from,destination,departure, arrive,startKM,finalKM,notes,driverId,carId}= req.body
        await Trip.update(
            {date,from,destination,departure, arrive,startKM,finalKM,notes,driverId,carId},
            {
                where:{
                    id: req.params.id
                }
            },
        );
        return res.send("Trip updated")
    },
    async delete(req,res){
        await Trip.destroy({
            where:{
                id:req.params.id
            }
        })
        return res.send("Trip Deleted")
    }
}