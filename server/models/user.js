const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: "Client",
  },
  inbox: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
