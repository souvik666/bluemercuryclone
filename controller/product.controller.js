const express = require("express");

const router = express.Router();

const Products = require("../models/product.model");

router.post("", async (req, res) => {
    const items = await Products.create(req.body);
    return res.send({items});
})

router.get("", async (req, res) => {
    const items = await Products.find().lean().exec();
    return res.send({items});
})

module.exports = router;
