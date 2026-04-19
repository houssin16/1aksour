// project_root/Controllers/authController.js
const User = require("../Models/UsersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "my_secret_key";

// تسجيل مستخدم جديد
 const registerUser = async (req, res) => {
 try {
    const { name, email, password } = req.body;

   const avatar = req.file ? req.file.filename : "default.png"; 
   const HashPassword = await bcrypt.hash(password ,10) 
   const user = await User.create({
      name,
      email,
      password:HashPassword,
      avatar 
    });
   await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 

// تسجيل الدخول
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "المستخدم غير موجود" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "كلمة المرور خاطئة" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "7d" });
    res.json({ success: true, token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// جلب بيانات المستخدم الحالي
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser, getProfile, SECRET_KEY };