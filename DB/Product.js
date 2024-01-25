const mongoose = require("mongoose");

const ProductSche = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String,
    quntity: String
});

module.exports = mongoose.model('products', ProductSche);