const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

//@desc     Get All posts
//@route    Post /api/posts
//access    Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate({
    path: "creator",
    select: "username profilePicture selectedRole",
    strictPopulate: false,
  });

  res.status(200).json({ success: true, count: posts.length, data: posts });
});

//@desc     Create post
//@route    Post /api/posts
//access    Public
const createPost = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text message");
  }

  const post = req.body;
  const newPost = new Post(post);

  await newPost.save();
  res.status(201).json({ success: true, data: newPost });
});

module.exports = { getPosts, createPost };
