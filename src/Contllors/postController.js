// project_root/Controllers/postController.js
const Post    = require("../Models/PostsModel");
const comment = require("../Models/CommentsModel");
const jwt     = require('jsonwebtoken')
const { verifyToken } = require("../Contllors/MIDDELWARE.JS");
const User  = require("../Models/UsersModel")
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
    const authoHeader = req.headers.authorization;

    if (!authoHeader)
      return res.status(401).json({ message: "No token" });

    const token = authoHeader.split(" ")[1];
    const decoded = jwt.verify(token, "my_secret_key");
   const page  = parseInt(req.query.page)  || 1 ;/// 1 
    const limit = parseInt(req.query.limit) || 5;  //// 10
    const skip  = (page - 1) * limit; ////// 1-1=0 *5 
    const posts = await Post.find()
      .populate("userId")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

      const Result = await Promise.all(
      posts.map(async (p) => {
        const Count = await comment.countDocuments({
          postId: p._id,
        });

        return {
          ...p.toObject(),
          CoummentsCount: Count,
        };
      })
    );

    res.json(Result);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
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
const GetMyPosts = async ( req , res) => {

  try{
      const authoHeader = req.headers.authorization
      if (!authoHeader) {
         return res.status(401).json({message: "No Token Provided"})
      }
      const Token       =  authoHeader.split(" ") [1]
      const decoded     = jwt.verify(Token ,"my_secret_key")
      const Posts       = await Post.find({
      userId : decoded.id  
      })
      
      .populate('userId')
      .sort({createdAt: -1})
       res.json(Posts)
  }catch(e){

      return res.status(500).json({message:"Server error ", error:e.message})
  }

}

const ChengeImageUser = async (req, res) => {
  try {

    if (!req.file) {
        return res.status(400).json({
        message: "No image uploaded"
      });
    }
     const Users = require('../Models/UsersModel');
    const file = req.file.filename;
    const userId = req.user.id;
         
    await Users.findByIdAndUpdate(userId, {
      avatar: file
    });

    return res.json({
      message: "Image updated successfully",
      avatar: file
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message
    });
  }
};
const GetPostById = async (req , res)=>{
 try{
    const posts = await Post.find({
     userId :req.params.id
     
    })
   if (!posts) {
    res.status(404).json({

      message:"User Not Found"
    })
   }
   res.status(200).json(posts)

  
 }catch(error){
res.status(500).json(error)}
}
const GetMyDataUser = async (req ,  res)=>{
 try{
    const id = req.params.id
    const username = await User.findById(id) 
    if(!username){
      return res.status(404).json({
        message:'User Not Found'
      })
      }
      res.status(200).json(username)

 }catch(error){
  res.status(500).json(error)
 }
   
}
const AddCoverImageSendFun =  async( req , res ) => {
 try {
       
       const Id = req.user.id
       
       if(!req.file){
        return res.status(400).json({message:"No file Uploades"})
       }
       const file  = req.file.filename
       
       await User.findByIdAndUpdate(Id, {
       coverImage : file
       })
       
       res.status(200).json({
         message : "Cover image update Successfully",
         coverImage : file
       })
    }catch (error) {
      res.status(500).json({
      message : error.message,
    
  })
  
 }
}
const GetPost = async (req , res) =>{
 
try{
  const post = await Post.findById(req.params.id)
  if(!post) {
    return res.status(404).json({message:"Post not found"})
  }
  res.json(post)
}catch(err){
 res.status(500).json({message:err.massege})
}
}

const GetPost_one_user = async  (req , res) => {

 try{
 const UserId  = req.user.id
 const Result  = await Post.find({
  userId : UserId
})
 res.json(Result)
 }catch(err){
res.status(404).json({message:err.massege})
}

}
module.exports = {
    createPost,
    getPosts,
    deletePost,
    UpdatePost,
    GetMyPosts,
    ChengeImageUser,
    GetPostById,
    GetMyDataUser,
    AddCoverImageSendFun,  
    GetPost,
    GetPost_one_user
  };

