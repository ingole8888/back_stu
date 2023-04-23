const express=require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const connection= require("./config/config")
const companiesController=require("./routes/companiesroute")
const adsController = require("./routes/adsroutes")

require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    return res.status(200).send("HomePage");
})

app.use("/ad", adsController)
app.use("/companies", companiesController)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("db connected");
    }
    catch(err){
        console.log(err);
    }
    console.log(`db connect at ${process.env.PORT}`);
})