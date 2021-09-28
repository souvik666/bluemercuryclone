const mongoose = require("mongoose");
const cartData = require("../models/product.model");

const userSchema = mongoose.Schema({
  username: { type: "string", require: true },
  email: { type: "string", require: true },
  password: { type: "string", require: true },
  last_name: { type: "string", require: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "cartData" }],
  newCart: [],
});

const user = mongoose.model("user", userSchema);
module.exports = user;
