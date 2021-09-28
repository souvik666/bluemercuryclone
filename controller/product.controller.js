const express = require("express");

const router = express.Router();

const Products = require("../models/product.model");

router.post("/", async (req, res) => {
  const items = await Products.create(req.body);
  return res.send({ items });
});

router.get("/:id", async (req, res) => {
  const items = await Products.find().sort({ price: -1 });
  res.render("new.ejs", {
    items,
  });
  // res.send(items);
});

module.exports = router;
