const express = require("express");
const router = express.Router();
const user = require("../models/user.model");


router.get("", async (req, res) => {
  return res.render("forgot_password")
})


router.post("", async (req, res) => {
  // console.log("hello");
  let body = req.body.password;
  
  const myres = await user.findOneAndUpdate(
    { email: req.body.email},
    { password: body },
    { new: true }
  );
  if (myres === null) {
    return res.render("create_one.ejs");
  }
  else {
    return res.render("sign_in.ejs");
  }
});

module.exports = router;
/* 6153627e797487a5c7b339cb */

// .send(myres)
