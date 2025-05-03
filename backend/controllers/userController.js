const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    console.log("🔐 User logged in:", user.name);
    res.status(200).json({ name: user.name, email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup
const signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await User.signup(email, password, name);
    const token = createToken(user._id);

    console.log("🆕 User signed up:", user.name);
    res.status(200).json({ name: user.name, email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
