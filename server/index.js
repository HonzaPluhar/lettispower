const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const Mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
Mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

// Middleware
app.use(express.json());

app.use("/", require("./routes/authRoutes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
