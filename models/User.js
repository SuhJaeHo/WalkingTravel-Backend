const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: ture },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
