const mongoose=require('mongoose')
const CatagorySchema= new mongoose.Schema({
   catagoryName:{
    type:String,
    required:true
   },
},
{timestamps:true}


);
module.exports=mongoose.model('Catagory',CatagorySchema)