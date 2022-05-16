const mongoose = require("mongoose");
const PostModel = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
module.exports = mongoose.model("post", PostModel);
