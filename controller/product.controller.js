const { application } = require("express");
const express = require("express");

const router = express.Router();

const Products = require("../models/product.model");
// const user = require("../models/user.model");

let items;

router.get("", async (req, res) => {
    items = await Products.find().lean().exec();
    return res.render("new.ejs", {
        items
    })
})
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

// router.get("/lToH", async (req, res) => {
//     const ltoh = await Products.find().sort({"price": 1}).lean().exec();
//     items = ltoh;
//     return res.render("new.ejs", {
//         items
//     })
// })

module.exports = router;
