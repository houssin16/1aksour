
const mongoose = require("mongoose");

async function Db() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Database Connected Ok ✅");
  } catch (err) {
    console.log(err);
  }
}

module.exports = Db;
