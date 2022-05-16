const mongoose = require("mongoose");
const Post = require("../model/postModel");
const User = require("../model/userModel");
const createPost = async (req, res, next) => {
  const { post, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res.json.status(400).json({ messsage: "enable to find user by Id" });
  }

  const PostBlog = new Post({
    post,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await PostBlog.save({ session });

    existingUser.posts.push([PostBlog]);
    existingUser.save({ session });
    session.commitTransaction();
  } catch (error) {
    console.log("error on the add event", error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ PostBlog });
};
exports.createPost = createPost;
