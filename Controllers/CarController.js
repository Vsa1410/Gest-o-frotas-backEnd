const Car = require("../models/Car");

module.exports={
    async store(req,res){
        const{plate, brand, model, currentKM, nextOilChange} = req.body;
        
        const car =  await Car.create({plate, brand, model, currentKM, nextOilChange});


        return res.json(car);
    },
    async index(req, res){
        const car = await Car.findAll();
        
        return res.json(car);
    },
    async change(req,res){
        const{plate, brand, model, currentKM, nextOilChange} = req.body;
        await Car.update(
            {plate, brand, model, currentKM, nextOilChange},
            {
                where:{
                    id:req.params.id
                }
            },
        );
        return res.send("Car updated with sucess")
    },
    async delete(req,res){
        await Car.destroy({
            where:{
                id:req.params.id
            }
        })
        return res.send("Deleted sucessfully")
    }
}
