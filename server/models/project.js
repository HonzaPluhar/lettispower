const mongoose = require("mongoose");
const { Schema } = mongoose;

// Funkce pro formátování data do DD.MM.YYYY
function formatDate(date) {
  return date.toLocaleDateString("cs-CZ"); // Lokalizovaný formát pro české prostředí
}

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  progression: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["waiting", "in progress", "finished", "cancelled"],
    default: "waiting",
  },
  trackTimeUrl: String,
  downloadUrl: String,

  created_at: {
    type: Date,
    default: Date.now,
    get: formatDate, // Getter, který formátuje datum při načítání
  },
});

projectSchema.set("toJSON", { getters: true });
projectSchema.set("toObject", { getters: true });

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
