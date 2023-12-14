const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwttoken = require("jsonwebtoken");
const verifyToken = require("./jwtAccess");


// Registration

router.post("/register", async (req, res) => {
  console.log("working in register");
  console.log(req.body)
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
  console.log(newUser)
    

    const userCreated = await newUser.save()
    res.status(200).json("saved sucess");

    // console.log("running")
  } catch (error) {
    res.status(500).json(error);
  }
});
// Login
router.post("/login", async (req, res) => {
  console.log(req.body.userName)
  console.log(req.body.password)

  try {
    const user = await User.findOne({
      userName: req.body.userName,
    });
  console.log("hello")

    if (!user) {
      return res.status(400).json("Invalid username or Password");
    }
    const pass = bcrypt.compareSync(req.body.password, user.password);
    // console.log(pass)
    if (!pass) {
      return res.status(500).json("Invalid username or Password");
    }

    // Generate a JWT
    const token = jwttoken.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json(error);
  }
});

//  client token verify singly

 router.get("/verify",verifyToken,async (req,res)=>{
    const user= await User.findById(req.userId)
    console.log(user)
    const data={message:"valid user",user:{user}}
  
    
   res.status(200).json(data)

 })

module.exports = router;
