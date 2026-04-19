const express = require("express");
const Db = require('./db.js')
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 3000;


const cors = require("cors");

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("/*", cors());

 

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