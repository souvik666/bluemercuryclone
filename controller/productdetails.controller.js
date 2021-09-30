const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
const { LocalStorage } = require("node-localstorage");
var localStorage = new LocalStorage("./scratch");
/* get my product details*/
/* req url format ---> localhost:2345/productdetails/6152e6ab9491bf5becda5e75 */

router.get("", async (req, res) => {
  res.render("product_details")
})

let findPro = products.find({name: "Orange Flower Water"})

router.get("/:id", async (req, res) => {
  const product_id = req.params.id;
  findPro = await products.findOne({_id: req.params.id}).lean().exec();
  let loggedUser = localStorage.getItem("userid");
  res.render("product_details.ejs", {
      findPro,
      loggedUser
  });
});

module.exports = router;
