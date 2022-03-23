const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const User = require("./models/users");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const KEY = process.env.KEY;
const PORT = process.env.PORT;
mongoose
  .connect(KEY)
  .then((res) => {
    app.listen(PORT, () => console.log("listen on port 5000"));
  })
  .catch((err) => console.log(err));

app.use("/signup", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/home", require("./routes/home"));
app.use("/products", require("./routes/products"));
