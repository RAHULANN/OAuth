const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// tell passport to use a new strategy for google login
passport.use(
  new googleStrategy(
    {
      clientID: process.env.CLIENTID, // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
      //  process.env.CLIENTID, // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
      clientSecret: process.env.CLIENTSCRET, // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com

      // e.g. _ASDFA%KFJWIASDFASD#FAD-
      callbackURL: "https://oauth-tdbd.onrender.com/google/callback",
    },

    async function (accessToken, refreshToken, profile, done) {
      //   find a user
      const user = await User.findOne({ email: profile.emails[0].value });
      if (user) {
        // if found, set this user as req.user
        return done(null, user);
      } else {
        // if not found, create the user and set it as req.user
        const password = crypto.randomBytes(20).toString("hex");
        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error("Something went wrong with bcrypt");

        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: hash,
        });

        const savedUser = await newUser.save();
        if (!savedUser) {
          console.log("error in creating user google strategy-passport", err);
          return;
        }

        return done(null, savedUser);
      }
    }
  )
);

module.exports = passport;
