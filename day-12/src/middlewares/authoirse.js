const Product = require("../models/product.model");
const User = require("../models/user.model");
const authorise = async (req, res, next) => {
  try {
    // console.log(req.params.id);
    const product = await Product.findOne({ _id: req.params.id })
      .populate("user_id")
      .lean()
      .exec();

    if (product.user_id._id == req.user._id) {
      return next();
    } else {
      res.send({ message: "you are not peferct seller or admin" });
    }
  } catch (err) {
    res.send({ message: err.message });
  }
};
module.exports = authorise;
