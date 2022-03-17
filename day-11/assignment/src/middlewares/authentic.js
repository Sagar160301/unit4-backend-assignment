// const { promise } = require("bcrypt/promises");
// const res = require("express/lib/response");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((res, rej) => {
    return jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        return rej(err);
      }
      return res(decoded);
    });
  });
};

const authentic = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.send({ message: "Authorization token not found or incorrect" });
    }
    if (!req.headers.authorization.startsWith("Bearer ")) {
      res.send({ message: "Authorization token not found or incorrect" });
    }
    let token = req.headers.authorization.trim().split(" ")[1];
    let decoded;
    try {
      decoded = await verifyToken(token);
    } catch (err) {
      res.send({ messsage: err.message });
    }
    req.userID = decoded.user._id;
  } catch (err) {
    res.send({ message: err.message });
  }
  return next();
};
module.exports = authentic;
