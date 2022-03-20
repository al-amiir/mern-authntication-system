const router = require("express").Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/users");

router.post("/", async (req, res) => {
  const user = req.body;
  const takenEmail = await userModel.findOne({ email: user.email }).exec();
  const takenUsername = await userModel.findOne({ username: user.username }).exec();
  if (takenUsername || takenEmail) {
    res.json({ message: "username or email has already been taken." });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    const dbUser = new userModel({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });
    dbUser.save();
    res.json({ message: "success" });
  }
});

module.exports = router;
