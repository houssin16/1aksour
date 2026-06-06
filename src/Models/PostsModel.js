const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // مهم جدًا
    required: true
  },
  text: String,
  image: String,
  likes: Array
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);