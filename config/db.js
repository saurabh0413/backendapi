const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connection = mongoose.connect(
  "mongodb+srv://saurabh:saurabh1234@cluster0.w0azhgz.mongodb.net/user"
);

module.exports = { connection };
