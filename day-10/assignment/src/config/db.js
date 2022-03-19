const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/validation?retryWrites=true&w=majority"
  );
};

module.exports = connect;
