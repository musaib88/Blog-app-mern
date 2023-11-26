const router=require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwttoken=require('jsonwebtoken')
const verifyToken = require('./jwtAccess');



// Registration

router.post("/register",async(req,res)=>{
   console.log("working in register")
    try {
      const salt= await bcrypt.genSalt(10)
      const hash= await bcrypt.hash(req.body.password,salt)
  const newUser= new User({
    userName:req.body.userName,
    email:req.body.email,
    password:hash
  })

    const userCreated = await newUser.save();
    res.status(200).json(userCreated)
    // console.log("running")

        
    } catch (error) {
        res.status(500).json(error)
    }

})
// Login
router.post("/login", async  ( req,res)=>{
      // console.log(req.userId)
  try {
    
    const user =  await User.findOne({
      userName:req.body.userName
    });
    if(!user){
     
     return res.status(400).json("Invalid username or Password");}
    const pass =   bcrypt.compareSync(req.body.password,user.password)
    // console.log(pass)
        if(!pass){
       return    res.status(500).json("Invalid username or Password");}
     
      // Generate a JWT
      const token = jwttoken.sign({ userId: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({token})
    
  } 
  catch (error) {
    res.status(500).json(error)
    
  }
})

module.exports=router;