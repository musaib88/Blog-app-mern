const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const verifyToken = require('./jwtAccess');




// Update 

router.put("/update",verifyToken,async(req,res)=>{
    if(req.body.password){
      const salt=bcrypt.genSaltSync(10)
      const newpass=bcrypt.hashSync(req.body.password,salt)
      // console.log(newpass);
       req.body.password=newpass
    }
    try {
       const user = await User.findByIdAndUpdate(req.userId ,{$set:req.body},{new:true});

        res.status(200).json(user)
      
    } catch (error) {
      res.status(400).json("wrong")
      
    }


})
// delete
router.delete("/delete",verifyToken,async( req,res)=>{
  console.log('in dlete')
  try {
    await User.findByIdAndDelete(req.userId)
  res.json("deleted successfully")
    
  } catch (error) {
    res.status(500).json("deletion unsuccessfull",error)
    
  }
  
})
// get 
router.get("/get",verifyToken,async(req , res)=>{
  try {
    const user = await User.findById(req.userId);
    res.status(200).json(user)
    
  } catch (error) {
    res.status(400).json("somthing went wrong")
    
  }
})


module.exports=router;