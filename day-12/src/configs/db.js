const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/Authorisation?retryWrites=true&w=majority"
  );
};
