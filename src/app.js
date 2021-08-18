const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares: funciones que se ejecutan antes de llegar a las rutas
let corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require("./routes/auth")(app);
require("./routes/users")(app);
app.use("/api/products", require("./routes/products"));
app.use("/api/sales", require("./routes/sales"));

module.exports = app;
