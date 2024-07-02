const mongoose = require("mongoose");


const tripSchema = new mongoose.Schema({
    title:{type: String, required: true},
    price:{type: String, required: true},
    details:{type: String, required: true}
});

const Trip = mongoose.model("trip", tripSchema);

module.exports = Trip ;