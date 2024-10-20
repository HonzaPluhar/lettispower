const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
} = require("../controllers/authController");

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

module.exports = router;
