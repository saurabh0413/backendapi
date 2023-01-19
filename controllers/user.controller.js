const { signupModel, loginModel } = require("../models/user.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signupController = async (req, res) => {
  const { email, password} = req.body;

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.send("something went wrong, please try again later");
    } else {
      const user = new signupModel({
        email: email,
        password: hash
      });
      await user.save();
      res.send(user);
    }
  });
};

const loginController = async (req, res) => {
  const data = req.body;
  const { email, password } = data;

  const result1 = await signupModel.findOne({ email });

  const hashed_pass = result1.password;

  bcrypt.compare(password, hashed_pass, function (err, result) {
    if (result) {
      const token = jwt.sign({ userId: result1._id }, process.env.SECRET_KEY);
      res.send({ msg: "login success", token: token });
    } else {
      res.send("Login Failed");
    }
  });
};

module.exports = { signupController, loginController };
