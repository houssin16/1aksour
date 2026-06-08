const express = require("express");
const Router = express.Router();
const path = require("path");
const multer = require("multer");

// Controllers
const { registerUser, loginUser, getProfile, SearchUsers ,GetUserprofile } = require("../Contllors/authController");
const { verifyToken } = require("../Contllors/MIDDELWARE.JS");
const { createPost, getPosts, deletePost, UpdatePost ,GetMyPosts ,ChengeImageUser } = require("../Contllors/postController");
const { addComment, getComments } = require("../Contllors/commentController");
const { ReplyComment, GetReplyComment } = require('../Contllors/ReplyComment');
const { PostLikess, Get___Likes } = require('../Contllors/LikesPost');
const { UpdateComment } = require('../Contllors/UpdateComments');

// Multer
const storageAvatar = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage: storageAvatar });

// Routes
Router.post("/register", upload.single("avatar"), registerUser);
Router.post("/login", loginUser);
Router.get("/profile", verifyToken, getProfile);

// Posts
Router.post("/posts", verifyToken, upload.single("image"), createPost);
Router.get("/posts", getPosts);
Router.delete("/posts/:id", verifyToken, deletePost);
Router.post('/posts/:id/like', verifyToken, PostLikess);
Router.get('/posts/likes', verifyToken, Get___Likes);
Router.put("/posts/:id", verifyToken, upload.single("image"), UpdatePost);
/* Router.put("/ChengeImage", upload.single("avatar"),verifyToken , ChengeImageUser) */
Router.put(
  "/ChengeImage",
  (req, res, next) => {
    console.log("🔥 STEP 1 ROUTE");
    next();
  },
  upload.single("avatar"),
  (req, res, next) => {
    console.log("🔥 STEP 2 MULTER DONE");
    next();
  },
  verifyToken,
  (req, res, next) => {
    console.log("🔥 STEP 3 VERIFY DONE");
    next();
  },
  ChengeImageUser
);
// Comments
Router.post("/posts/:id/comments", verifyToken, addComment);
Router.get("/posts/:id/comments", getComments);
Router.put('/comments/:id', verifyToken, UpdateComment);

// Replies
Router.post("/replies", verifyToken, ReplyComment);
Router.get('/replies', verifyToken, GetReplyComment);
Router.get('/user/:id/posts' , GetUserprofile)
// Search
Router.get('/SearchUser', SearchUsers);
Router.get('/My_User_Post' , verifyToken,GetMyPosts)
module.exports = Router; // ✅ export واحد فقط