const { createClient } = require("redis");

// const client = createClient({
//   url: "redis://localhost:6379",
// });
// mongodb://localhost:27017
const client = createClient({ url: "redis://localhost:6379" });

client.on("error", (err) => {
  console.log("Redis Client Error", err);
});

module.exports = client;
