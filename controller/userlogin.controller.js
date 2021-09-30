const express = require("express");
const router = express.Router();
const users = require("../models/user.model");
const { LocalStorage } = require("node-localstorage");
var localStorage = new LocalStorage("./scratch");

router.get("", async (req, res) => {
  return res.render("sign_in.ejs");
});

/* make a login request */
router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const myres = await users.findOne({ email: email, password: password });
  if (myres === null) {
    res.status(404).render("not_found");
  } else {
    res.redirect("/");
    localStorage.setItem("userid", myres._id);
    localStorage.setItem("isloggedIn", true);
  }
});

/* render my login page */
router.get("/", async (req, res) => {
  res.render("sign_in", {});
});
let tst = localStorage.getItem("isloggedIn");
console.log(tst)
module.exports = router;
