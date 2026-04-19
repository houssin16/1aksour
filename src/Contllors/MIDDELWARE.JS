// project_root/Controllers/authMiddleware.js
const jwt = require("jsonwebtoken");
const SECRET_KEY = "my_secret_key"; // نفس المفتاح اللي في authController

// middleware للتحقق من التوكن
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ success: false, message: "يجب تسجيل الدخول أولاً" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // هذا يخلي req.user موجود في كل روت محمي
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "التوكن غير صالح" });
  }
};

module.exports = { verifyToken };