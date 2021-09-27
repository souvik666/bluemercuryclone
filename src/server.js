const express = require("express");

const mongoose = require("mongoose");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

app.listen("1234", async () => {
    await connect();
    console.log("Listening on port 1234....");
});
