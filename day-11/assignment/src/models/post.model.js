const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  body: { type: String, required: true },
  //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

module.exports = mongoose.model("post", postSchema);
