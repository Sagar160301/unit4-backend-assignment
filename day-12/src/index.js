const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");

const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");
const app = express();
const passport = require("./configs/google.auth");

app.use(express.json());

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.use("/products", productController);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    console.log(req.user);
    const token = generateToken(req.user);
    res.send({ user: req.user, token });
    // res.redirect("/");
    // this is used for take to another page
  }
);

app.listen(5901, async () => {
  try {
    await connect();
    console.log("listening on port 5901");
  } catch (err) {
    console.log(err.message);
  }
});
