const Driver = require("../models/Driver")

module.exports = {
    async store(req,res){
        const {name} = req.body;

        const driver = await Driver.create({name});

        return res.json(driver);
    },
    async index(req, res){
        const driver = await Driver.findAll();
        return res.json(driver)
    },
    async change(req, res){
        const {name} = req.body;
        await Driver.update(
            {name},
            { 
                where:{id: req.params.id
                }
            }
        )
        return res.semd("Driver updated sucessfully")
    },
    async delete(req, res){
        await Driver.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.send("Driver deleted")
    }
}