const { Router } = require("express");
const router = Router();
const {
  getSale,
  getSales,
  getSalesByDate,
  createSale,
} = require("../controllers/sales.controller");

router.route("/").get(getSales).post(createSale);
router.route("/:date").get(getSalesByDate);
router.route("/:id").get(getSale);

module.exports = router;
