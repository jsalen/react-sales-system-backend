const productsController = {};
const productModel = require('../models/Product');

productsController.getProduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  res.json(product);
};

productsController.getProducts = async (req, res) => {
  const products = await productModel.find({ quantity: { $gt: 0 } });
  res.json(products);
};

productsController.createProduct = async (req, res) => {
  const { product, quantity, price } = req.body;
  const newProduct = new productModel({
    product,
    quantity,
    price,
  });
  await newProduct.save();
  res.json(newProduct);
};

productsController.updateProduct = async (req, res) => {
  const { product, quantity, price } = req.body;
  await productModel.findByIdAndUpdate(req.params.id, {
    price,
    product,
    quantity,
  });
  res.json({ message: 'updated.' });
};

productsController.deleteProduct = async (req, res) => {
  await productModel.findByIdAndDelete(req.params.id);
  res.json({ message: 'deleted.' });
};

module.exports = productsController;
