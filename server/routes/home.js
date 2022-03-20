const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ name: "amir", age: 26 });
  res.send("Here We Are =D");
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ name: "miro" });
});

module.exports = router;
