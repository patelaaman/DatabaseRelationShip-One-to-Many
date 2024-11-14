const express = require("express")
const app = express();
require("dotenv").config();
const port  = process.env.PORT || 3000
const mongoose = require("mongoose")
const  bodyparser = require("body-parser")
const broute = require("./Routes/bookRoute")
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DATABase Succesfully Connnected")
})
const cors = require("cors")
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

app.use("/book",broute)
app.listen(port ,()=>{
    console.log(`Server Run on port ${port}`);
})