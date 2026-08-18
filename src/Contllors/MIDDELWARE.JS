// project_root/Controllers/authMiddleware.js
const SECRET_KEY = process.env.JWT_SECRET || "my_secret_key";
 const jwt = require("jsonwebtoken");
/* const SECRET_KEY = "my_secret_key"; */  // نفس المفتاح اللي في authController

// middleware للتحقق من التوكن
 const verifyToken = (req, res, next) => {

  if (req.method === "OPTIONS") {
    return next();
  }
  const authHeader = req.headers["authorization"];
  console.log("AUTH HEADER:", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("TOKEN:", token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "يجب تسجيل الدخول أولاً"
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = decoded;

    console.log("USER DECODED:", decoded);

    next();

  } catch (err) {
    console.log("JWT ERROR:", err);

    return res.status(403).json({
      success: false,
      message: "التوكن غير صالح"
    });
  }
}; 

/* 

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No authorization header" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({ message: "Bad token format" });
  }

  const token = parts[1].trim();

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // ✅ نفس المفتاح دائماً
    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
} */
module.exports = { verifyToken };