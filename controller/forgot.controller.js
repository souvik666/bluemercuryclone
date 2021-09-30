const express = require("express");
const router = express.Router();
const user = require("../models/user.model");

router.patch("/:id", async (req, res) => {
  let body = req.body.password;
  const myres = await user.findOneAndUpdate(
    req.params.id,
    { password: body },
    { new: true }
  );
  res.send(myres);
});

module.exports = router;
/* 6153627e797487a5c7b339cb */
