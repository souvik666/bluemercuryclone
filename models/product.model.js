const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: {type: String, require: true},
    brand: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
    category: {type: String, require: true},
    description: {type: String, require: true},
    details: {type: String, require: true},
    status: {type: String, require: true}
}, {
    versionKey: false,
    timestamps: true
})

const product = mongoose.model("product", productSchema);

module.exports = product; 