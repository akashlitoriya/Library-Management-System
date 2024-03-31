const express = require("express");
const dotenv = require("dotenv");

const app = express();
//middlewares
dotenv.config();
app.use(express.json());

//routes

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
