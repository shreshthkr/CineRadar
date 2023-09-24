const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());




//Server running on port 7000;
app.listen(process.env.PORT, async() => {
    console.log(`Server is running on port ${process.env.PORT}`)
});