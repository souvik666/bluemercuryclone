const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
router.get("/", async (req, res) => {
  let product = await products.find();
  res.render("index", {
    product,
  });
});

module.exports = router;
