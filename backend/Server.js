const express = require("express");
const compression = require("compression");
const env = require("./src/_config");
const connectToMongoDB = require("./src/database/db");
const endpoints = require("./src/routes");
const morgan = require("morgan");
const app = express();
 
// Connect to Database
connectToMongoDB();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(compression());
 
 
app.set("view engine", "ejs");
app.listen(env.port, () => {
  console.log(
    "Server is listening at",
    env.port,
    "with env",
    process.env.NODE_ENV
  );
});

endpoints(app);

process.on("unhandledRejection", (err) => {
  console.log(
    "Unhandeled Rejection\n ",
    err.response?.data || err.message || err
  );
});

process.on("uncaughtException", (err) => {
  console.log(
    "Uncaught Rejection\n ",
    err.response?.data || err.message || err
  );
});