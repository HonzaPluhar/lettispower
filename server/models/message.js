const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  recipient: {
    type: String,
    required: true,
  },
  message: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;
