const mongoose = require("mongoose");


module.exports = () =>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("[+] connected to MongoDB database");
    } catch (error) {
        console.log(error);
        console.error(err.stack);
        console.log("[-] could not connected to the database");
    }
};