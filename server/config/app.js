const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const routes = require("../routes");
const dbConnection = require("./dbConnection");

dbConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
