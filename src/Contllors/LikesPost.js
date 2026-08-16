const mongoose = require("mongoose");
const Post = require("../Models/PostsLikes");

const PostLikess = async (req, res) => {
const postId = req.params.id;
const userId = req.user.id;

const post = await Post.findById(postId);

if (!post) {
  return res.status(404).json({ message: "Post not found" });
}

const isLiked = post.likes.includes(userId);

await Post.findByIdAndUpdate(
  postId,
  isLiked
    ? { $pull: { likes: userId } }
    : { $addToSet: { likes: userId } }
);

const updated = await Post.findById(postId);

res.json({
  likes: updated.likes.length,
  liked: !isLiked
});
};

const Get___Likes = async ( req , res) =>{

   try{
 
     const userId = req.user.id
     const Posta= await Post.find({likes : userId})
     res.json(Posta)
     }catch(e){
    console.log(e);
    res.status(500).json({message : e.message})
  
   }
}
module.exports = { PostLikess , Get___Likes}; 