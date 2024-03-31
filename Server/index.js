const express = require("express");
const dotenv = require("dotenv");

const app = express();
//middlewares
dotenv.config();
app.use(express.json());

//routes

//connect to db
const connectDB = require("./config/db");
connectDB();
//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
