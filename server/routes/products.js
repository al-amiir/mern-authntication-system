const router = require("express").Router();
const verify = require("../controlers/verify");

router.get("/", verify, (req, res) => {
  res.json({
    isLoggedIn: true,
    username: req.user.username,
  });
  // res.redirect("/products");
  // res.send("Here We Are =D");
});

module.exports = router;
