const express=require('express')
const router=express.Router();
const Catagory=require('../models/Catagory')
const verifyToken=require('./jwtAccess')


// create catagory
router.post("/add",verifyToken,async (req,res)=>{
    try {
         const catagory=new Catagory({catagoryName:req.body.catagoryName})
          const newuser=await catagory.save();
          res.status(200).json(newuser);

    } 
    catch (error) {
        res.status(400).json("unsuccessful ")
        
    }
})
// get all
router.get("/find",async (req,res)=>{
    try {
         const catagories= await Catagory.find()
          res.status(200).json(catagories);
          console.log(catagories)

    } 
    catch (error) {
        res.status(400).json("did not find ")
        
    }
})
// delete
router.post("/delete",verifyToken,async (req,res)=>{
    try {
         const catagory= await Catagory.deleteOne({catagoryName:req.catagoryName})
          res.status(200).json("deleted sucessfully");

    } 
    catch (error) {
        res.status(400).json("did not find ")
        
    }
})

module.exports=router;