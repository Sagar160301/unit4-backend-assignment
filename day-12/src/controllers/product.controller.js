const express = require("express");

const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const Product = require("../models/product.model");
const authorise = require("../middlewares/authoirse");

router.post("", authenticate, async (req, res) => {
  req.body.user_id = req.userID;
  try {
    const product = await Product.create(req.body);
    console.log(product);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id", authenticate, authorise, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.patch("/:id", authenticate, authorise, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
