const express = require("express");
const router = express.Router();
const users = require("../models/user.model");
const { LocalStorage } = require("node-localstorage");
var localStorage = new LocalStorage('./scratch'); 

const hook = false;
/* make a login request */
router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const myres = await users.findOne({ email: email, password: password });
  if (myres === null) {
    res.status(404).render("not_found");
  } else {
    res.render("index");
    localStorage.setItem("userid", myres);
  }
});

/* render my login page */
router.get("/", async (req, res) => {
  res.render("sign_in", {
    hook,
  });
});

module.exports = router;