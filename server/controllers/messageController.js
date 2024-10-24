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

// Get all messages from a user

module.exports = {
  createMessage,
  // getMessages,
};
