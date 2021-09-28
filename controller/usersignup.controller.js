const express = require("express");
const router = express.Router();
const userSchema = require("../models/user.model");

router.get("/", async (req, res) => {
  res.send("hi");
});

/* create a user */
router.post("/", async (req, res) => {
  const newUSer = await userSchema.create(req.body);
  res.send({ newUSer });
});

module.exports = router;
