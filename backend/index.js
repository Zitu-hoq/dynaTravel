require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");
const paymentRoutes = require("./routes/payment");
const adminRoutes = require("./routes/admin");
const tripRoutes = require("./routes/trips");
const ticketRoutes = require("./routes/ticket");


//database connection
connection();


//middlware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors());


//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/tickets", ticketRoutes);

const port= process.env.PORT || 8080;
app.listen(port, ()=> console.log("[+] Server started on port: " +port));