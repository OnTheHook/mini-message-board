const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("message", { title: "Mini Message Board" });
});

router.post("/", function (req, res, next) {
  res.send("Put stuff here");
});
module.exports = router;
