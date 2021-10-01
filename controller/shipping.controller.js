const express = require("express");
const router = express.Router();

router.get("/:amount", async (req, res) => {
    let amount = +req.params.amount;
    return res.render("payment.ejs", {
        amount
    });
})

router.post("/promo/:amount", async (req, res) => {
    let amount = +req.params.amount;
    if (req.body.box === "blue30") {
        amount = (amount / 100) * 70;
        return res.render("payment.ejs", {
            amount
        });
    } else {
        return res.render("payment.ejs", {
            amount
        });
    }
    
})

module.exports = router;