const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
const myClients = require("../models/user.model");

/* check if the product already exsit */
const counter = async (arr) => {
  let map = {};
  let tmp;
  for (let i in arr) {
    tmp = arr[i];
    map[tmp] = map[tmp] || 0;
    map[tmp]++;
  }
  return map;
};
/* add to cart request by client */
router.get("/:userID/:productID", async (req, res) => {
  const whoami = req.params.userID; //user ID
  const product_id = req.params.productID;
  //see if already exsited product
  /*   {
    $push: { cart: product_id },
  } */
  const findPro = await myClients.findOne({
    $and: [{ _id: whoami }, { cart: product_id }],
  });
  let { cart } = findPro;
  cart.push(product_id);
  let newCart = await counter(cart);
  console.log(newCart);
  if (findPro) {
    await myClients.findByIdAndUpdate(
      whoami,
      [{ $set: { newcart: [newCart] } }],
      {
        new: true,
      }
    );
    await myClients.findByIdAndUpdate(whoami, [{ $set: { cart: [] } }], {
      new: true,
    });
  }
  res.send(await myClients.find());
});

module.exports = router;
