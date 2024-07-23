const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
  res.send("Good");
});

module.exports = router;
