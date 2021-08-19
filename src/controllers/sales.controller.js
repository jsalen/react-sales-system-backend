const salesController = {};
const salesModel = require("../models/Sales");

salesController.getSale = async (req, res) => {
  const sale = await salesModel.findById(req.params.id);
  res.json(sale);
};

salesController.getSales = async (req, res) => {
  const sales = await salesModel.find().sort({ date: -1, _id: -1 });
  res.json(sales);
};

salesController.getSalesByDate = async (req, res) => {
  const date = new Date(req.params.date);
  date.setHours(24, 0, 0, 0);

  const dayBefore = new Date(date);
  dayBefore.setDate(date.getDate() - 1);

  const sales = await salesModel
    .find({
      date: { $gte: dayBefore, $lte: date },
    })
    .sort({ date: -1, _id: -1 });

  res.json(sales);
};

salesController.createSale = async (req, res) => {
  const { products, totalPrice, date, soldBy } = req.body;
  const newSale = new salesModel({
    products,
    totalPrice,
    date,
    soldBy,
  });
  await newSale.save();
  res.json(newSale);
};

module.exports = salesController;
