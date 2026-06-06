
const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  text: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }
}, { timestamps: true })

module.exports = mongoose.model("Reply" , replySchema)