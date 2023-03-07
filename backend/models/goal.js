const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    repeat: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
