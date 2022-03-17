const app = require("./index");

const connect = require("./config/db");

const start = async (req, res) => {
  try {
    await connect();
    app.listen(5901, () => {
      console.log("listen to the port number 5901");
    });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = start();
