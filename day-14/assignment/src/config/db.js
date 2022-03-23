const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/Redis?retryWrites=true&w=majority"
  );
};

module.exports = connect;
