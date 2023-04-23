const mongoose=require("mongoose")

const companySchema= new mongoose.Schema({
   
   name:{type:String},
   url:{type:String}
   
})

const companyModel=mongoose.model("company",companySchema)

module.exports=companyModel