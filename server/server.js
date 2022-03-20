const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/users");
require("dotenv").config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const KEY = process.env.KEY;
const PORT = process.env.PORT;
mongoose
  .connect(KEY)
  .then((res) => {
    app.listen(PORT, () => console.log("listen on port 5000"));
  })
  .catch((err) => console.log(err));

app.use("/", require("./routes/home"));
