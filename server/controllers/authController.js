const User = require("../models/user");

const test = (req, res) => {
  res.json("Route via test is working correctly");
};

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

    const user = await User.create({ name, email, password });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something went wrong" });
  }
};

module.exports = {
  test,
  registerUser,
};
