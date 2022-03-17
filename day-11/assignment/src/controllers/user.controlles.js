const express = require("express");
const User = require("../models/user.model");

const router = express.Router();
router.get("", async (req, res) => {
  let user = await User.find({}).lean().exec();
  res.send(user);
  try {
  } catch (err) {
    res.send({ message: err.message });
  }
});

module.exports = router;
