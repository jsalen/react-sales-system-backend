const { Router } = require("express");
const router = Router();
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers);
router.route("/create").post(createUser);
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
