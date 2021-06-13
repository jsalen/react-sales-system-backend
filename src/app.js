const express = require("express");
const app = express();
const cors = require("cors");

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares: funciones que se ejecutan antes de llegar a las rutas
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));

module.exports = app;
