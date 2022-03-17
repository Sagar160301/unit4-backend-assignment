const express = require("express");
const authentic = require("../middlewares/authentic");
const router = express.Router();
const Post = require("../models/post.model");
router.post("/", authentic, async (req, res) => {
  try {
    req.body.userId = req.userID;
    let post = await Post.create(req.body);
    res.send(post);
  } catch (err) {
    res.send({ message: err.message });
  }
});
module.exports = router;
