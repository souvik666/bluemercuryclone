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
    map[tmp] = map[tmp] || 1;
    map[tmp]++;
  }
  return map;
};

const watchDog = (arr, n) => {};

/* add to cart request by client */
router.get("/:userID/:productID", async (req, res) => {
  const whoami = req.params.userID; //user ID
  const product_id = req.params.productID;

  const findPro = await myClients.findByIdAndUpdate(whoami, {
    $push: { cart: product_id },
  });
  let { cart, newCart } = findPro;
  for (let i in newCart) {
    cart.push(Object.keys(newCart[i]).toString());
  }
  /*  see if already exsited product*/
  let countedData = await counter(cart);
  await myClients.findByIdAndUpdate(whoami, {
    newCart: countedData,
  });
  res.send(findPro);
});

module.exports = router;
