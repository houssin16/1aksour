console.log("🔥 THIS SERVER IS RUNNING");
const express = require("express");
const cors = require("cors");

const Db = require('./db.js');
const path = require("path");
const fs = require('fs')
const multer  = require('multer')
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.static("public"));
// ✅ 1. Middleware أولاً (الترتيب مهم جداً)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.options("/{*path}", cors()); // ✅ للتعامل مع preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// ✅ 2. Routes بعد الـ middleware
const postRoutes = require('../src/Router/BooksRouter.js');
app.use('/', postRoutes);


/* ______________________________________________ without Connection_____________________________________________________________ */
async function StartServer() {

  try{
       await Db() 
       app.listen(PORT, () => {
       console.log("Server is running on port " + PORT);
});
  }catch(Error){
   console.log(Error);

  }
}
StartServer()


// تشغيل السيرفر




















/* app.get('/users' , (req  , res ) =>{
  
const Users = JSON.parse(fs.readFileSync('users.json' ,'utf8'))
res.json(Users)
})
app.post('/users' , (req , res) =>{
  try{

   const Users = JSON.parse(fs.readFileSync('users.json' ,'utf8'))
Users.push(req.body)
fs.writeFileSync('users.json' , JSON.stringify(Users ,null , 2))
res.json({massage: 'yes is Create A new User' , user: req.body})
  }catch(error){

         console.log(error);
         
  }
}) */