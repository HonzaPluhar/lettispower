const Message = require("../models/message");
const User = require("../models/user");

const createMessage = async (req, res) => {
  try {
    const { recipient, message } = req.body;

    // Find user by email
    const user = await User.findOne({ email: recipient });
    if (!user) {
      return res.json({ error: "Recipient not found" });
    }

    // Create
    const newMessage = new Message({
      recipient,
      message,
    });
    await newMessage.save();
    res.json(newMessage);

    // Add message to user inbox
    user.inbox.push(newMessage);

    // Save user
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

// get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createMessage,
  getMessages,
};
