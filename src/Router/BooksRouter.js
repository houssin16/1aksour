const express = require("express");
const Router = express.Router();
const path = require("path");
const multer = require("multer");

                         


// Controllers
const { registerUser, loginUser, getProfile } = require("../Contllors/authController");
const { verifyToken } = require("../Contllors/MIDDELWARE.JS");
const { createPost, getPosts, deletePost , UpdatePost } = require("../Contllors/postController");
const { addComment, getComments } = require("../Contllors/commentController");

//Multer setup
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
Router.post("/posts", verifyToken, upload.single("image"), createPost)
Router.get("/posts", getPosts);
Router.delete("/posts/:id", verifyToken, deletePost);

// Comments
Router.post("/posts/:id/comments", verifyToken, addComment);
Router.get("/posts/:id/comments", getComments);

Router.put("/posts/:id" ,verifyToken , upload.single("image"), UpdatePost )
module.exports = Router;
















