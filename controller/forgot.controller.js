const express = require("express");
const router = express.Router();
const user = require("../models/user.model");


router.get("", async (req, res) => {
  return res.render("forgot_password")
})

// ------------------
// router.post("", async(req,res) => {
//   const el = await 
// })

// ------------------

router.patch("/:email", async (req, res) => {
  console.log("hello");
  let body = req.body.password;
  
  const myres = await user.findOneAndUpdate(
    req.params.email,
    { password: body },
    { new: true }
  );
  return res.render("login");
});

module.exports = router;
/* 6153627e797487a5c7b339cb */

// .send(myres)
