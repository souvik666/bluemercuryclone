const express = require("express");
const router = express.Router();


router.post("/:amount", async (req, res) => {
    const email = req.body.email;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;
    const amount = req.params.amount;
    if ( email.trim().length < 6 || fname.trim().length < 3 || lname.trim().length < 3 || address.trim().length < 5 || city.trim().length < 3 || state.trim().length < 3 || pincode.trim().length < 4 ) {
      return res.render("payment.ejs", {
        amount
      });
    } else {
      return res.redirect("/carddetails");
    }
})



module.exports = router;