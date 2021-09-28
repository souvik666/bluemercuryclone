const mongoose = require("mongoose");
//mongodb+srv://bluemercury:bluemercury123@cluster0.flkoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/bluemercy")
}

module.exports = connect;