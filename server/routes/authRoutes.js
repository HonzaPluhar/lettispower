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

//message controllers
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

//project controllers
const {
  createProject,
  getProjects,
} = require("../controllers/projectsController");

const clientUrl = process.env.CLIENT_URL;

// middleware
router.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);

//auth routes
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logOut);

//message routes
router.post("/createmessage", createMessage);
router.get("/getmessages", getMessages);

//project routes
router.post("/createproject", createProject);
router.get("/getprojects", getProjects);

module.exports = router;
