const mongoose=require('mongoose')
const CatagorySchema= new mongoose.Schema({
   catogoryName:{
    type:String,
    required:true
   }
},
{timestamps:true}


);
module.exports=mongoose.model('Catagory',CatagorySchema)