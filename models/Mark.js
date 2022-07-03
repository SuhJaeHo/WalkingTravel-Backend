const mongoose = require("mongoose");

const markSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    name: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    photoURL: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mark", markSchema);
