const router = require("express").Router();
const verify = require("../controlers/verify");

router.get("/", verify, (req, res) => {
  res.json({
    isLoggedIn: true,
    username: req.user.username,
  });
  res.send("Here We Are =D");
});

module.exports = router;
