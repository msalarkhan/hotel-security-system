const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Incident Routes are working",
  });
});

module.exports = router;
