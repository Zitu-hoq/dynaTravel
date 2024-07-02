const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    admin: {type: String, required: true},
    password: {type: String, required: true}
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin ;