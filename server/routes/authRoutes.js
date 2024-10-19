const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser } = require("../controllers/authController");

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

module.exports = router;
