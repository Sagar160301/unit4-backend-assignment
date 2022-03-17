const express = require("express");
const { body, validationResult } = require("express-validator");
const res = require("express/lib/response");
const router = express.Router();

const User = require("../models/user.model");

router.post(
  "/",
  body("name").trim().not().isEmpty().withMessage("name should not be empty"),
  body("email").trim().isEmail().withMessage("it should be an email"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password shoud not be empty")
    .custom((value) => {
      const password = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
      if (!value.match(password)) {
        throw new Error("password should be strong");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
    // console.log(req.body);
  }
);

module.exports = router;
