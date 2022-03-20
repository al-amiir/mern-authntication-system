const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ name: "amir", age: 26 });
  res.send("Here We Are =D");
});

app.listen(5000, () => console.log("listen on port 5000"));
