const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: {
    type: String,
    required: true,
    lowercase: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model("Product", productSchema);
