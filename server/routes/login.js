const router = require("express").Router();
const userModel = require("../models/users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const loginBody = req.body;
  userModel.findOne({ email: loginBody.email }).then((dbuser) => {
    if (!dbuser) res.json({ message: "Invalid email" });
    else {
      bcrypt.compare(loginBody.password, dbuser.password).then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbuser._id,
            username: dbuser.username,
          };
          jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
            if (err) res.json({ message: err });
            else
              res.json({
                message: "success",
                token: token,
              });
          });
        } else res.json({ message: "Invalid password!" });
      });
    }
  });
});

module.exports = router;
