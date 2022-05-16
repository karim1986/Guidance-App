const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("event", eventSchema);
