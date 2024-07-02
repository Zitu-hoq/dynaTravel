const router = require("express").Router();
const Order = require("../models/order");


router.post("/", async(req,res)=>{
    try{
        await new Order({...req.body}).save();
        res.status(201).send({message: "order created successfully"});
    }catch(error){
        res.status(500).send({
            message: "Internal server error"
        });
    }
});
router.post("/admin",async(req,res)=>{
    try {
        await Order.findOneAndRemove({user:req.body.user,productName:req.body.productName});
        const orders = await Order.find({});
        res.status(200).send({Orders: orders});

    } catch (error) {
        console.log(error);
    }
});

router.post("/user",async(req,res)=>{
    try {
        const orders = await Order.find({user:req.body.user});
        return res.status(200).send({orders: orders});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;