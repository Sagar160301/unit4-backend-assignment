const express = require("express");
const app = express();
const start = require("./server");

const userController = require("./controllers/user.controlles");
const { signup, login } = require("./controllers/auth.controller");

const registerController = require("./controllers/regeister.controller");
const loginController = require("./controllers/login.controllers");
const postController = require("./controllers/post.controllers");
app.use(express.json());

app.use("/user", userController);
app.use("/register", registerController, signup);
app.use("/login", loginController, login);
app.use("/post", postController);

start;
module.exports = app;
