const User = require("../models/users.models");
// we required validator for validation
const { body, validationResult } = require("express-validator");

const express = require("express");
// const { notify } = require('..');

const router = express.Router();

router.post(
  "/",
  body("email")
    .trim()
    // .not()
    .isEmail()
    .withMessage("enter a valid email")
    .custom(async (value) => {
      let user = await User.findOne({ email: value }).lean().exec();
      if (user) {
        throw new Error("The email is already is exist");
      }
      return true;
    }),

  // validation for pincode
  body("pincode")
    .trim()
    .not()
    .isEmpty()
    .withMessage("pincode should not be empty")
    .isNumeric()
    .withMessage("it shoulbe 6 digit number")
    .custom((value) => {
      if (value && value.length != 6) {
        throw new Error("Enter a valid pincode");
      }
      return true;
    }),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("it should not be empty")
    .isNumeric()
    .withMessage("it should be a Number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Age must lies between 1 to 100");
      }
      return true;
    }),
  body("gender")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Gender should not be empty")
    .custom((value) => {
      if (value != "Male" && value != "Female" && value != "Others") {
        throw new Error("Gender should be Male (or) Female (or) Others ");
      }
      return true;
    }),
  async (req, res) => {
    try {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await User.create(req.body);
      res.status(500).send(user);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;
