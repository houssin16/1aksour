const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  text: String,
  image: String,

  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  }
});

module.exports =
  mongoose.models.Post || mongoose.model("Post", postSchema);