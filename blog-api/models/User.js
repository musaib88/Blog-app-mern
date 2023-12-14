const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"http://localhost:5000/images/profile-icon-png-910.png"
    },
},
{timestamps:true}


);
module.exports=mongoose.model('User',UserSchema)