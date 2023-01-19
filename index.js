const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors');
const { userRoute } = require("./routes/user.routes");
const app = express();
const PORT = 1090;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.use("/user", userRoute);

app.listen(PORT, async() => {
    try {
        await connection;
        console.log("connection established");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on port 9090");
});
