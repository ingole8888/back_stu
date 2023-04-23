const mongoose=require("mongoose")

const adSchema= new mongoose.Schema({
   companyId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "companiesroute",
      required: true,
    },
   primaryText:{type:String},
   headline:{type:String},
   description:{type:String},
   CTA:{type:String},
   imageUrl:{type:String}
})

const adModel=mongoose.model("ad",adSchema)

module.exports=adModel