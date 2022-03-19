const express = require("express");
const router = express.Router();
const Gallery = require("../models/galley.models");

const upload = require("../middlewares/fileUpload");

router.post("/", upload.array("userPicture", 5), async (req, res) => {
  try {
    console.log(req.body);
    let picture = req.file.map((file) => {
      return file.path;
    });
    let pics = await Gallery.create({
      userId: req.body.userId,
      userPicture: picture,
    });
    res.send(pics);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
