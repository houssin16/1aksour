// project_root/Controllers/postController.js
const Post = require("../Models/PostsModel");
const Comment = require("../Models/CommentsModel");

const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const image = req.file ? req.file.filename : null;

    const post = await Post.create({
      userId: req.user.id,
      text,
      image
    });

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 
};



/* -------------------------------------------------------------------------------------------------------------------------------------- */





const getPosts = async (req, res) => {
 try {
   const Posts = await Post.find()
   .populate('userId' , 'name avatar')
   .sort({createAt: -1})

   const Result = await Promise.all(

      Posts.map(async (p) =>{
        const Count = await Comment.countDocuments({postId:p._id})
        return{
          ...p.toObject(),
          CoummentsCount : Count
        }
      })
   )
  res.json(Result)
 } catch (error) {
  
 }
};





/* -------------------------------------------------------------------------------------------------------------------------------------- */

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (post.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "غير مصرح" });
    }

    await Post.findByIdAndDelete(id);
    res.json({ message: "تم الحذف" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const UpdatePost = async (req , res) =>{
 try{

   const { id } = req.params;
   const updatedPost = await Post.findByIdAndUpdate(
    
    id,
    {
      text:req.body.text,
      image: req.file ? req.file.filename : undefined
 
    },
    {
      returnDocument:"after"
    }
     
   ) ;
  res.json(updatedPost)
}
 catch(error){
console.log(error);
    res.status(500).json({message : error.message})
}
}
module.exports = { createPost, getPosts, deletePost , UpdatePost };