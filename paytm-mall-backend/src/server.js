const app = require("./index");
const connect = require("./config/db");

app.listen(5901, async (req, res) => {
  try {
    await connect();
    console.log("listen to the port number 5901");
  } catch (error) {
    console.log({ message: error.message });
  }
});
