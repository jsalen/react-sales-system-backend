const { authJwt } = require("../middlewares");
const controller = require("../controllers/users.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/dash/seller",
    [authJwt.verifyToken, authJwt.isSeller],
    controller.sellerBoard
  );
  app.get(
    "/api/dash/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
