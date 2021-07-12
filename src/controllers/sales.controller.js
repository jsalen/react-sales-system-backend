const salesController = {};
const salesModel = require("../models/Sales");

salesController.getSale = async (req, res) => {
  const sale = await salesModel.findById(req.params.id);
  res.json(sale);
};

salesController.getSales = async (req, res) => {
  const sales = await salesModel.find().sort({ date: -1 });
  res.json(sales);
};

salesController.createSale = async (req, res) => {
  const { products, totalPrice, date } = req.body;
  const newSale = new salesModel({
    products,
    totalPrice,
    date,
  });
  await newSale.save();
  res.json(newSale);
};

module.exports = salesController;
