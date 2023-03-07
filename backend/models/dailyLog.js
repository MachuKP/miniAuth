const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

const dailyLogSchema = new Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    items: {
      type: [itemSchema],
      required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DailyLog", dailyLogSchema)
