const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
    return res.render("testpayment.ejs");
  })

router.post("/verify", async (req, res) => {
  let number = req.body.number;
  let name = req.body.name;
  let expiry = req.body.expiry;
  let code = req.body.code;
  if (number.trim().length !== 16 || name.trim().length < 3 || expiry.trim().length !== 5 || code.trim().length < 4) {
    res.redirect("/carddetails");
  } else {
    setTimeout(function () {
      return res.redirect("/");
    }, 2000)
  }
})

module.exports = router;