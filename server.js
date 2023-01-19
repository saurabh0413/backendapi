const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors')
const app = express();
const PORT = 9090;
app.use(express.json());
app.use(cors());
app.listen(PORT, async() => {
    try {
        await connection;
        console.log("connection established");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on port 9090");
});
