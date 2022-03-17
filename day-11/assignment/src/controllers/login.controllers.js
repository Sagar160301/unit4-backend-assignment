const express = require("express");
const { body, validationResult } = require("express-validator");
const res = require("express/lib/response");
// const { route } = require("..");

const router = express.Router();

router.post(
  "",
  body("email").trim().isEmail().withMessage("enter a valid email"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password should not be empty")
    .custom((value) => {
      const password = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
      if (!value.match(password)) {
        throw new Error({ message: err.message });
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return next();
  }
);

module.exports = router;
