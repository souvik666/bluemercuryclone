const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
/* get my product details*/
/* req url format ---> localhost:2345/productdetails/6152e6ab9491bf5becda5e75 */
router.get("/:id", async (req, res) => {
  const product_id = req.params.id;
  const findPro = await products.findById(product_id);
  res.send(findPro);
});

module.exports = router;
