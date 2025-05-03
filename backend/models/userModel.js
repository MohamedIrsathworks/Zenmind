const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

// SIGNUP method
userSchema.statics.signup = async function (email, password, name) {
  if (!email || !password || !name) {
    throw Error("Missing email or password or name");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
      email,
      password: hash,
      name,
    });

    console.log("✅ User saved to MongoDB:", user);
    return user;
  } catch (err) {
    console.error("❌ Error saving user to MongoDB:", err.message);
    throw Error("Signup failed: " + err.message);
  }
};

// LOGIN method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Missing email or password");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email does not exist");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
