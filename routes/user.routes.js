const express = require("express");
const {
  signupController,
  loginController,
} = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/signup", signupController);
userRoute.post("/login", loginController);

module.exports = { userRoute };
