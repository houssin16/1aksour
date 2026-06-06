const mongoose = require("mongoose");

const CommentUpdateSchema = new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,

  text: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date
  },
  isEdited: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.models.Comment || mongoose.model("Comment", CommentUpdateSchema);
