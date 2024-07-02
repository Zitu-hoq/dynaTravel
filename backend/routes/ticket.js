const router = require("express").Router();
const Ticket = require("../models/ticket");

router.post("/",async(req,res)=>{
    let start = req.body.from;
    let end= req.body.to;
    try {
        const tickets = await Ticket.find({startL:start, endL:end});
        if(tickets){
            return res.status(200).send({
                tickets: tickets
            });
        }else{
            return res.status(401).send({message:"No bus found"});
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;