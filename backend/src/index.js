const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();

const app = express();

//Middleware
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from your React frontend
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    credentials: true               // Allow cookies if needed
}));
app.use(express.json())

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


//Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})