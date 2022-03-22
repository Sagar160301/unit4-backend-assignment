const multer = require("multer");
// const req = require("express/lib/request");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../myuploads"));
  },
  filename: function (req, file, callback) {
    // this is for recent date and time
    const uniquePrefix = Date.now();
    // file.originalname it is for name of the file
    callback(null, uniquePrefix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  // The function should call `callback` with a boolean
  // to indicate if the file should be accepted
  if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
    console.log(req.file);
    // To accept the file pass `true`, like so:
    callback(null, true);
  } else {
    console.log("Helllo");
    // To reject this file pass `false`, like so:
    callback(null, false);
  }
};

const uploads = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 15,
  },
});

module.exports = uploads;

// const fileupload = (keyform, type) => {
//   return function (req, res, next) {
//     let profile;
//     if (type == "single") {
//       profile = uploads.single(keyform);
//     } else if (type == "multiple") {
//       profile = uploads.any(keyform);
//     }
//     return profile(req, res, function (err) {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//         res.send({ message: err.message });
//       } else if (err) {
//         // An unknown error occurred when uploading.
//         res.send({ message: err.message });
//       }
//       next();
//       // Everything went fine.
//     });
//   };
// };

// module.exports = { fileupload };
