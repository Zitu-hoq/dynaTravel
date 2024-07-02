const router = require("express").Router();
const Stripe = require("stripe")(process.env.SECRATE_KEY);


router.post("/",async(req,res)=>{
    let status, error;

    const {token, amount} = req.body;
    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: "usd"
        });
        status = 200;
    } catch (error) {
        console.log(error);
        status ="Failure";
    }
    res.json({status, error});
});

module.exports = router;