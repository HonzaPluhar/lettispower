const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logOut,
} = require("../controllers/authController");

//other controllers
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

const clientUrl = process.env.CLIENT_URL;

// middleware
router.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/logout", logOut);

//other routes
router.post("/createmessage", createMessage);
router.get("/getmessages", getMessages);

module.exports = router;
