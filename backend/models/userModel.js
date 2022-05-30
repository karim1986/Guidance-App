const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a name"],
  },
  selectedRole: {
    type: String,
    required: [true, "Please select a role"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },

  profilePicture: {
    type: String,
    default: "",
  },

  interesstedIn: {
    type: Array,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Generate and hashpassword token
userSchema.methods.getResetPasswordToken = function () {
  //generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //hash token and set to resetPsswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
