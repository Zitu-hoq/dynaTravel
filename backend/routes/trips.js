const router = require("express").Router();
const Trip = require("../models/trip");

router.post("/",async(req,res)=>{
    try {
        await new Trip({...req.body}).save();
        res.status(201).send({message: "User created successfully"});
        

    } catch (error) {
        console.log(error);
    }
});

router.get("/",async(req,res)=>{
    try{
        const trips = await Trip.find({});
        return res.status(200).send({trips: trips});
    }catch(error){
        console.log(error);
    }
});

module.exports = router;