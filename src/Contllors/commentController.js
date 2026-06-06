// project_root/Controllers/commentController.js
const Comment = require("../Models/CommentsModel");

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const comment = await Comment.create({
      postId: id,
      userId: req.user.id,
      text
    });

    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getComments = async (req, res) => {
  try {
    const { id } = req.params;

    const comments = await Comment.find({ postId: id })
      .populate("userId", "name avatar")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { addComment, getComments };