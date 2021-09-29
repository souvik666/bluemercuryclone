const express = require("express");
const router = express.Router();
const userSchema = require("../models/user.model");

router.get("", async (req, res) => {
  res.render("create_one");
});

/* create a user */
router.post("/", async (req, res) => {
  try {
    const newUSer = await userSchema.create(req.body);
    res.render("index");
  } catch (error) {
    res.render("create_one");
  }
});

module.exports = router;
