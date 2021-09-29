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

// Router for Brand Names
router.get("/kiehl", async (req, res) => {
    items = await Products.find({brand: "KIEHL'S SINCE 1851"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/bumble", async (req, res) => {
    items = await Products.find({brand: "BUMBLE AND BUMBLE"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/tom", async (req, res) => {
    items = await Products.find({brand: "TOM FORD"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/chantec", async (req, res) => {
    items = await Products.find({brand: "CHANTECAILLE"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/111skin", async (req, res) => {
    items = await Products.find({brand: "111SKIN"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

// Routes for Category

router.get("/makeup", async (req, res) => {
    items = await Products.find({category: "beauty product"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/skincare", async (req, res) => {
    items = await Products.find({category: "skin care"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/facecare", async (req, res) => {
    items = await Products.find({category: "face care"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/haircare", async (req, res) => {
    items = await Products.find({category: "hair care"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

// Routers for price
router.get("/low", async (req, res) => {
    items = await Products.find().sort({ price: 1 }).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/high", async (req, res) => {
    items = await Products.find().sort({ price: -1 }).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/new", async (req, res) => {
    items = await Products.find().lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.get("/bestseller", async (req, res) => {
    items = await Products.find({category: "face care"}).lean().exec();
    return res.render("new.ejs", {
        items
    })
})

router.post("/", async (req, res) => {
  const items = await Products.create(req.body);
  return res.send({ items });
});

// router.get("/lToH", async (req, res) => {
//     const ltoh = await Products.find().sort({"price": 1}).lean().exec();
//     items = ltoh;
//     return res.render("new.ejs", {
//         items
//     })
// })

module.exports = router;
