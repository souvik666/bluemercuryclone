const express = require("express");
const router = express.Router();
const products = require("../models/product.model");
const myClients = require("../models/user.model");

router.get("", async (req, res) => {
  return res.render("cart.ejs");
})


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

/* cart total */
router.get("/total/:id", async (req, res) => {
  const myres = await myClients.findById(req.params.id);
  let { cart } = myres;
  //res.send(cart);
  let tmp = [];
  for (let i in cart) {
    tmp.push(await products.findById(cart[i]));
  }
  let hook = [];
  for (let i in tmp) {
    hook.push(tmp[i].price);
  }
  let sum = hook.map(Number).reduce(function (a, b) {
    return a + b;
  });
  res.send({ sum });
});

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

/* showProducts on cart */
router.get("/:id", async (req, res) => {
  const whoami = req.params.id;
  const myres = await myClients.findById(whoami);
  const clientCart = myres.newCart;
  let tmp = [];
  for (let i in clientCart) {
    tmp.push(Object.keys(clientCart[i]).toString());
  }
  const finalres = await products.find().where("_id").in(tmp).exec();
  res.send({ finalres });
});

router.get("/:sum", async (req, res) => {
  req.params.sum = req.query.sum;
});

module.exports = router;
