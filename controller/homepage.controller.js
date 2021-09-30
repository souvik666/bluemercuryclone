const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
const users = require("../models/user.model");
const { LocalStorage } = require("node-localstorage");
var localStorage = new LocalStorage("./scratch");

var loginStatus;

router.get("/", async (req, res) => {
  let product = await products.find();
  let isLogged = localStorage.getItem("isloggedIn");
  if (isLogged === "true") {
    loginStatus = "LOGOUT";
  } else {
    loginStatus = "SIGN IN/UP";
  }
  
  res.render("index", {
    product,
    loginStatus
  });
});

module.exports = router;
