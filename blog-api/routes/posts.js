const  express=require('express')
const  router=express.Router()
const Post=require('../models/Post')
const verifyToken=require('../routes/jwtAccess')
const User=require('../models/User')

// create post
router.post("/write",verifyToken, async(req,res)=>{
    try {
       const user= await User.findById(req.userId)

        const post= await new Post({
            title:req.body.title ,
            desc:req.body.desc,
            userName:user.userName,
            photo:req.body.photo
            
            
        }).save()
        
        res.status(200).json(post)
        
    } catch (error) {
        res.status(400).json("post unsuccessful")
        
    }

    


})
//update
router.put('/update/:id', verifyToken, async (req, res) => {
    const postId = req.params.id;
    // console.log(postId)

    try {
        // Use await to wait for the promises to resolve
        
        let post = await Post.findById(postId);
        console.log(post.userName)
        let user = await User.findById(req.userId);
        // console.log(user.userName)


        if (post.userName === user.userName) {
            try {
                // Update post properties
                post.title = req.body.title;
                post.desc = req.body.desc;
                post.photo = req.body.photo;
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
    const post= await Post.findById(req.params.id)
    res.status(200).json(post);

        
    } catch (error) {
        res.status.status(404).json("post not found")
        
    }


})
// get all

module.exports=router;
