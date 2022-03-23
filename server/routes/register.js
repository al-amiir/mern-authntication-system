const router = require("express").Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/users");

router.post("/", async (req, res) => {
  const user = req.body;
  const takenEmail = await userModel.findOne({ email: user.email }).exec();
  const takenUsername = await userModel.findOne({ username: user.username }).exec();
  if (takenUsername) {
    res.json({ usernameError: "Username has already been taken" });
  } else if (takenEmail) {
    res.json({ emailError: "This email has been used before" });
  } else {
    if (user.password.length < 8) {
      res.json({ passwordError: "Password should be more than 8" });
    } else {
      user.password = await bcrypt.hash(req.body.password, 10);
      const dbUser = new userModel({
        username: user.username.toLowerCase(),
        email: user.email.toLowerCase(),
        password: user.password,
      });
      dbUser.save();
      res.json({ successMessage: "success" });
    }
  }
});

module.exports = router;
