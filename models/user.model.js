const { default: mongoose } = require("mongoose");

const singupSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const loginSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const signupModel = mongoose.model("singup", singupSchema);
const loginModel = mongoose.model("login", loginSchema);

module.exports = { signupModel, loginModel };
