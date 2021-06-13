const userController = {};
const userModel = require("../models/User");

userController.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};

userController.getUser = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.json(user);
};

userController.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new userModel({ username });
  await newUser.save();
  res.json(username);
};

userController.deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.json({ message: "user deleted" });
};

module.exports = userController;
