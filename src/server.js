const express = require("express");
const Db = require('./db.js')
const path = require("path");

const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});



/* const cors = require("cors"); */
/* 
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://your-netlify-site.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
 */
// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
console.log("__dirname =", __dirname);// routers
const Booksrouter = require("./Router/BooksRouter.js");

app.use("/", Booksrouter);

// اختبار السيرفر

// تشغيل السيرفر


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
///0662164980