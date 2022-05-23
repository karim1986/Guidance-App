const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/postsControllers");

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
