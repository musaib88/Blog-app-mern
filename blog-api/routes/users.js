const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const verifyToken = require('./jwtAccess');
const {uploadImg,deleteImg}=require('./imageUpload')




// Update 

router.put("/update", verifyToken, uploadImg, async (req, res) => {
  console.log("hello", req.body);
  console.log(req.photourl)

  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(400).json("User not found");
    }

    // Compare the provided old password with the stored hashed password
    const isPasswordValid = bcrypt.compareSync(req.body.oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json("Old password doesn't match");
    }

    // Generate a new salt and hash the new password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    const profileUrl=req.photourl?req.photourl:user.profilePic;

    // Update user information in the database
    const updatedUser = await User.findByIdAndUpdate(req.userId, {
      email: req.body.email,
      password: hashedPassword,
      profilePic:profileUrl
      // Add other fields you want to update here
    });

    if (!updatedUser) {
      return res.status(400).json("Couldn't update user");
    }

    res.status(200).json("User updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});
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