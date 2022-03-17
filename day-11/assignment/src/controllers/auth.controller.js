const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
// const res = require("express/lib/response");
// const req = require("express/lib/request");
require("dotenv").config();
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

const signup = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(500).send("email is already exist");
    }
    user = await User.create(req.body);
    const token = generateToken(user);
    res.status(500).send({ user, token });
  } catch (err) {
    return res.send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    console.log("hello");
    let user = await User.findOne({ email: req.body.email });

    // check for email is equal or not
    if (!user) {
      res.status(500).send({ message: "Email and password is wrong" });
    }

    // check password is correct or not
    const match = user.checkPassword(req.body.password);
    if (!match) {
      res.status(500).send({ message: "Email and password is wrong" });
    }
    const token = generateToken(user);
    console.log(user, token);
    res.status(201).send({ token, user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { signup, login };
