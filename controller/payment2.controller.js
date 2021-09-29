const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
    return res.render("payment_2.ejs");
  })

module.exports = router;