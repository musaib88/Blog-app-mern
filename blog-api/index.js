const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authroute=require('./routes/auth')
const userroute=require('./routes/users')
const postroute=require('./routes/posts')
const catroute=require('./routes/catagories')
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL ).then(console.log("hey bab boy")).catch((err)=>{
    console.log("somthing went wrong",err)
});



// app.use("/mussi",(req,res)=>{
//     console.log("hey mussi i am listening")
// })
app.use("/api/auth",authroute);
app.use("/api/user",userroute);
app.use("/api/post",postroute);
app.use("/api/catagory",catroute);
app.listen(5000,()=>{
    console.log("post listing")
})