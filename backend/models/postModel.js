const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  message: {
    type: String,
    required: [true, "PLease add a text"],
    default: "",
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  // events: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Event",
  //     // required: true,
  //   },
  // ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
