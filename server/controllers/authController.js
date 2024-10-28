const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("Route via test is working correctly");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name was entered
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    // Check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and must be 6 characters or longer",
      });
    }
    // Check if email is good
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exists" });
    }

    //Hash password
    const hashedPassword = await hashPassword(password);
    //Create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "Client",
      inbox: [],
      service1: false,
      service2: false,
      service3: false,
      service4: false,
      service5: false,
      projects: [],
      created_at: new Date(),
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something went wrong" });
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      //JWT
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          name: user.name,
          role: user.role,
          inbox: user.inbox,
          projects: user.projects,
          service1: user.service1,
          service2: user.service2,
          service3: user.service3,
          service4: user.service4,
          service5: user.service5,
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, { sameSite: "None", secure: true })
            .json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Password or email is invalid",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const logOut = (req, res) => {
  try {
    res.clearCookie("token").json({ message: "Signout success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logOut,
};
