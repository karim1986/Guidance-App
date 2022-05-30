const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc     Register new User
//@route    Post /api/users
//access    Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
    selectedRole,
    profilePicture,
    interesstedIn,
  } = req.body;

  if (!username || !email || !password || !selectedRole || !profilePicture) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check if the user exists:
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //hash password:
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    selectedRole,
    profilePicture,
    interesstedIn,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      selectedRole: user.selectedRole,
      profilePicture: user.profilePicture,
      interesstedIn: user.interesstedIn,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc     Authenticate a user
//@route    Post /api/users/login
//access    Public
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      selectedRole: user.selectedRole,
      profilePicture: user.profilePicture,
      createdAt: user.createdAt,
      interesstedIn: user.interesstedIn,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc     Get user data
//@route    Get /api/users/me
//access    Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  LoginUser,
  getMe,
};
