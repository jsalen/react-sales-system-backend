const { Schema, model } = require("mongoose");

const saleSchema = new Schema({
  products: [
    {
      product: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Sales", saleSchema);
