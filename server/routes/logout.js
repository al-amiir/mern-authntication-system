const router = require("express").Router();

router.get("/", (req, res) => {
  res.cookie("token", "", { expires: new Date(Date.now() - 900000), httpOnly: true });
  res.json({
    message: "Logout success",
  });
});

module.exports = router;
