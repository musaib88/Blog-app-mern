const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authroute=require('./routes/auth')
const userroute=require('./routes/users')
const postroute=require('./routes/posts')
// const multer=require('multer')
const cors = require('cors');
const allowedOrigins = ['http://localhost:3000'];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the request origin is in the list of allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL ).then(console.log("hey bab boy")).catch((err)=>{
    console.log("somthing went wrong",err)
});

// const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//     cb(null,'images')
//     },
//     filename:function(req,file,cb){
//         cb(null,file.fieldname + '-' + Date.now() +  path.extname(file.originalname))
//     }

// }) 
// const upload = multer({ storage: storage });
// app.post("/api/upload",upload.single('file'),async(req,res)=>{
//        console.log(req.file)

//    try {
    
//     res.status(200).json(`http://localhost:5000/images/${req.file.filename}`)

//    } catch (error) {
//     console.log("somthing missing from file")
    
//    }
// })

// app.use("/mussi",(req,res)=>{
//     console.log("hey mussi i am listening")
// })
app.use(
    cors({
      origin: function (origin, callback) {
        // Check if the request origin is in the list of allowed origins
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    })
  );
  app.use('/images', express.static('images'));
app.use("/api/auth",authroute);
app.use("/api/user",userroute);
app.use("/api/post",postroute);
app.listen(5000,()=>{
    console.log("post listing")
})