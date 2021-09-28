const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: {type: String, require: true},
    brand: {type: String, require: true},
    name: {type: String, require: true},
    price: {type:Number, require: true}
}, {
    versionKey: false,
    timestamps: true
})

const product = mongoose.model("product", productSchema);

module.exports = product; 