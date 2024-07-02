const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    user: {type: String, required: true},
    productName: {type: String, required: true}
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order ;