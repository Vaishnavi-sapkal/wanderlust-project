const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usercontroller = require("../controllers/users.js");
//const {signup, renderSignupForm, loginForm, login , logout} = require("../controllers/users.js");
// const flash = require("connect-flash");

//signup
router.get("/signup", usercontroller.renderSignupForm);

router.post("/signup", wrapAsync(usercontroller.signup));

//login
router.get("/login", usercontroller.renderloginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  usercontroller.login
);

//logged out
router.get("/logout", usercontroller.logout);

module.exports = router;
