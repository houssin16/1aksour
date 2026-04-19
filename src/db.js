 const mongoose = require("mongoose");
 
 // الاتصال بقاعدة البيانات
  mongoose.connect("mongodb+srv://AksourHoucine-Data-base:0662164980@aksourapi.zuxdjn8.mongodb.net/?appName=AksourApi")
  .then(()=>{
  console.log("Database Connected Ok Aksour");
  })
  .catch((err)=>{
  console.log(err);
  });
 









