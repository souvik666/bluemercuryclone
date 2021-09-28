const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();
//controllers
const userController = require("../controller/usersignup.controller.js");
const loginController = require("../controller/userlogin.controller.js");
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/user", userController);
app.use("/login", loginController);
app.listen(2345, async (req, res) => {
  await connect();
  console.log("Listening on port 2345....");
});
