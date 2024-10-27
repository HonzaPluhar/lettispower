const mongoose = require("mongoose");
const { Schema } = mongoose;

// Funkce pro formátování data do DD.MM.YYYY
function formatDate(date) {
  return date.toLocaleDateString("cs-CZ"); // Lokalizovaný formát pro české prostředí
}

const messageSchema = new Schema({
  recipient: {
    type: String,
    required: true,
  },
  message: String,
  created_at: {
    type: Date,
    default: Date.now,
    get: formatDate, // Getter, který formátuje datum při načítání
  },
});

messageSchema.set("toJSON", { getters: true });
messageSchema.set("toObject", { getters: true });

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;
