const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:5901/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      let user = await User.findOne({ email: profile._json.email });
      if (!user) {
        user = await User.create({
          email: profile._json.email,
          password: uuidv4(),
          type: ["Customer"],
        });
      }
      // console.log("user", user);
      // req.user = user;
      return cb(null, { user: "user" });
    }
  )
);
module.exports = passport;
