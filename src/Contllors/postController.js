// project_root/Controllers/postController.js
const Post    = require("../Models/PostsModel");
const comment = require("../Models/CommentsModel");
 const jwt     = require('jsonwebtoken')
 const { verifyToken } = require("../Contllors/MIDDELWARE.JS");
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

    const posts = await Post.find()
      .populate("userId")
      .sort({ createdAt: -1 });

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

/* const ChengeImageUser = async (req , res)=>{
 
 try {
  const File   =  req.file.filename
  const Userid =  req.user.id 
 console.log(File)
 console.log(Userid);
 
  const Users = require('../Models/UsersModel')
  ;
  
  Users.findByIdAndUpdate(Userid , {
  
    avatar:File
  })
  
  res.json({
  message:"Imge Updated Successfully",
  avatar : File,

    
  })
 }catch (error) {
  console.log(error);
  
   res.status(500).json({
    error : error.message
   })

     
  
 }

} */
const ChengeImageUser = async (req , res)=>{
 
 try {
  const File   =  req.file.filename
  const Userid =  req.user.id
  const Users = require('../Models/UsersModel')
  ;
  
  await Users.findByIdAndUpdate(Userid , {
  
    avatar:File
  })
  
  res.json({
  message:"Imge Updated Successfully",
  avatar : File,
  })
  console.log(Users);
  
 } catch (error) {
  console.log(error)
   res.status(500).json({
    error : error.message
   })

     
  
 }

}
module.exports = { createPost, getPosts, deletePost , UpdatePost ,GetMyPosts ,ChengeImageUser};

