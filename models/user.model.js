const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: "string", require: true },
  email: { type: "string", require: true },
  password: { type: "string", require: true },
  last_name: { type: "string", require: true },
  cart: [],
});

const user = mongoose.model("user", userSchema);
module.exports = user;
