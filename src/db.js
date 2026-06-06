const mongoose = require("mongoose");

async function Db() {
  try {
    await mongoose.connect("mongodb+srv://AksourHoucine-Data-base:0662164980@aksourapi.zuxdjn8.mongodb.net/?appName=AksourApi");
    console.log("Database Connected Ok ✅");
  } catch (err) {
    console.log(err);
  }
}

module.exports = Db;

