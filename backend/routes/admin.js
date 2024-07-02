const router = require("express").Router();
const Order = require("../models/order");
const Admin = require("../models/admin");
const Ticket = require("../models/ticket");

router.post("/ticket",async(req,res)=>{
    try {
        await new Ticket({...req.body}).save();
        res.status(201).send({message:"ticket added successfully"});
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
})


router.post("/",async(req,res)=>{
    try {
        const admin = await Admin.findOne({
            admin:req.body.adminName,
            password: req.body.adminPassword
        });
        if(!admin){
            return res.status(401).send({message: "Invalid admin"});
        }else{
            const orders = await Order.find({});
            return res.status(200).send({orders: orders});
        }
        

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;