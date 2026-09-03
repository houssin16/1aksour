const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  avatar: { type: String, default: "" },
  coverImage: { type: String, default: "" },
});

module.exports = mongoose.model("User", UserSchema);

