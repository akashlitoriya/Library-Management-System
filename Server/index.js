const express = require("express");
const dotenv = require("dotenv");

const app = express();

//import middlewares
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "tmp",
  })
);

//routes

//connect to db
const connectDB = require("./config/db");
connectDB();

//cloudinary
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();
//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
