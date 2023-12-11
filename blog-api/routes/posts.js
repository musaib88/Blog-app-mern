const  express=require('express')
const  router=express.Router()
const Post=require('../models/Post')
const verifyToken=require('../routes/jwtAccess')
const User=require('../models/User')
const {uploadImg,deleteSingleFile}=require('./imageUpload')
// create post
router.post("/write", verifyToken,uploadImg, async (req, res) => {
    try {
      // Ensure that the image is uploaded before proceeding
    //   await uploadImg(req, res);
  
      console.log("Image uploaded successfully");
  
      // Find the user by their ID
      const user = await User.findById(req.userId);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Create a new Post using the request body and user information
      const post = await new Post({
        title: req.body.title,
        desc: req.body.desc,
        userName: user.userName,
        photo: req.photourl,
      }).save();
  
      console.log("Post created successfully", post);
  
      res.status(200).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(400).json({ error: "Post unsuccessful" });
    }
  });
  
//update
router.put('/update/:id', verifyToken,uploadImg ,async (req, res) => {
    console.log("in update")
    console.log(req.body)
       

    const postId = req.params.id;
    console.log(postId)

    try {

        
        // Use await to wait for the promises to resolve
        
        let post = await Post.findById(postId);
        console.log(post.userName)
        let user = await User.findById(req.userId);
        // console.log(user.userName)


        if (post.userName === user.userName) {
            if (req.body.oldpicUrl) {
                // Delete the old image
                try {
                     deleteSingleFile(req.body.oldpicUrl);
                    console.log("Old image deleted successfully");
                } catch (error) {
                    console.error("Error deleting old image:", error);
                    // Handle the error if deletion fails
                }
            }

            try {
                // Update post properties
                post.title = req.body.title;
                post.desc = req.body.desc;
                post.photo = req.photourl
                post.catagories = req.body.catagories;

                // Save the updated post
                await post.save();

                res.json("Post updated successfully");
            } catch (error) {
                res.status(400).json("Post update unsuccessful");
            }
        } else {
            res.status(400).json("Unauthorized - ");
        }
    } catch (error) {
        res.status(400).json("Post not found");
    }
});
// delete


router.delete("/delete/:id",verifyToken,async (req,res)=>{
    // console.log("runing dele")
    const postId=req.params.id;
    const user= await User.findById(req.userId)
    try {
        const  post= await Post.findById(postId);
        if(post.userName===user.userName){
            try {
              await  post.deleteOne()
              
              res.json("deleted sucessfully")
                
            } catch (error) {

              res.status(400).json("deleted sucessfully")
                
            }
        }

    } catch (error) {
        res.status(400).json("post not found")
        
    }
})
// get one post
router.get("/get/:id",async(req,res)=>{
    try {
    const post= await Post.findOne({_id :req.params.id})
    res.status(200).json(post);

        
    } catch (error) {
        res.status(404).json("post not found")
        
    }


})
// get all
router.get("/find",async (req,res)=>{
    const {user,catagory}=req.query;
    try {
        let posts= await Post.find();
        if(user){
            try {
               const  userPosts=posts.filter(post=>post.userName===user)
            res.status(200).json(userPosts);
                
            } catch (error) {
                res.status(400).json("No results found ")
                
            }
            
        }
        else if (catagory){
            try {
                const catagoryPosts=posts.filter(post=>post.catagories.includes(catagory))

                res.status(200).json(catagoryPosts)
                
            } catch (error) {
                
                res.status(400).json("did not find anything")

            }
        }
        else {

            res.status(200).json(posts)
        }
        
    } catch (error) {
        res.status(400).json("oops somthing went wrong")
        
    }
  })

module.exports=router;
