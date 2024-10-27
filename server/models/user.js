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
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],

  created_at: {
    type: Date,
    default: Date.now,
  },

  service1: {
    type: Boolean,
    default: false,
  },

  service2: {
    type: Boolean,
    default: false,
  },

  service3: {
    type: Boolean,
    default: false,
  },

  service4: {
    type: Boolean,
    default: false,
  },

  service5: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
