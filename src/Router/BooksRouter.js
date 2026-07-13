const express = require("express");
const Router = express.Router();
const path = require("path");
const multer = require("multer");

// Controllers
const { registerUser, loginUser, getProfile, SearchUsers  , GetUserprofile,  } = require("../Contllors/authController");
const { verifyToken } = require("../Contllors/MIDDELWARE.JS");
const { 
    createPost,
    getPosts,
    deletePost,
    UpdatePost, 
    GetMyPosts, 
    ChengeImageUser, 
    GetPostById ,
    GetMyDataUser,
  AddCoverImageSendFun,GetPost } = require("../Contllors/postController");
const { addComment, getComments } = require("../Contllors/commentController");
const { ReplyComment, GetReplyComment } = require('../Contllors/ReplyComment');
const { PostLikess, Get___Likes } = require('../Contllors/LikesPost');
const { UpdateComment } = require('../Contllors/UpdateComments');
const {Deletecommentee}  = require ('../Contllors/commentController')
// Multer
const storageAvatar = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage: storageAvatar });

// Routes
Router.post("/register", upload.single("avatar"),registerUser);
Router.post("/login", loginUser);
Router.get("/profile", verifyToken, getProfile);
Router.get('/posts/user/:id', GetPostById);
// Posts
Router.post("/posts", verifyToken, upload.single("image"),createPost);
Router.get("/posts", getPosts);
Router.delete("/posts/:id", verifyToken, deletePost);
Router.post('/posts/:id/like', verifyToken, PostLikess);
Router.get('/posts/likes', verifyToken, Get___Likes);
Router.put("/posts/:id", verifyToken, upload.single("image"),UpdatePost);
Router.put("/ChengeImage",  upload.single("avatar"),verifyToken,ChengeImageUser);  
Router.get("/GetUser/:id" ,verifyToken  ,GetMyDataUser )
Router.get("/posts/:id", GetPost)
Router.post('/AddCover-image',upload.single("coverImage"),verifyToken ,AddCoverImageSendFun)
console.log("verifyToken:", typeof verifyToken);
console.log("Deletecomment:", typeof Deletecommentee);
Router.delete('/deletetcommenst/:id',verifyToken ,Deletecommentee)
// Comments
Router.post("/posts/:id/comments", verifyToken, addComment);
Router.get("/posts/:id/comments", getComments);
Router.put('/comments/:id', verifyToken, UpdateComment);

// Replies
Router.post("/replies", verifyToken, ReplyComment);
Router.get('/posts/:postIdd/reblies', verifyToken, GetReplyComment);
console.log(typeof GetUserprofile)
Router.get('/user/:id/posts' , GetUserprofile)
// Search
Router.get('/SearchUser', SearchUsers);
Router.get('/My_User_Post' , verifyToken,GetMyPosts)
module.exports = Router; // ✅ export واحد فقط