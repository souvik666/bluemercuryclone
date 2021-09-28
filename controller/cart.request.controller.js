const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
const myClients = require("../models/user.model");
/* add to cart request by client */
router.get("/:userID/:productID", async (req, res) => {
  const whoami = req.params.userID; //user ID
  const product_id = req.params.productID;
  //see if already exsited product
  const findPro = await myClients.find({
    $and: [{ _id: whoami }, { cart: product_id }],
  });
//few logic left/*  */
  /*  const myUsrs = await myClients.findByIdAndUpdate(whoami, {
    $push: { cart: product_id },
  }); */
  //const tmp = await products.find();
  res.send(findPro);
  //res.send(myUsrs);
});

module.exports = router;
