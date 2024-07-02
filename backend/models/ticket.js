const mongoose = require("mongoose");


const ticketSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true, default: "26, AK1J, Non AC"},
    startL:{type: String, required: true},
    endL:{type: String, required: true},
    startTime:{type: String, required: true},
    endTime:{type: String, required: true},
    seats:{type: Number, required: true},
    fee:{type: Number, required: true}
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket ;