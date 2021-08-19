const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("connection error", e);
    process.exit();
  });
