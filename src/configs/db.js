const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://bluemercury:bluemercury123@cluster0.flkoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect;