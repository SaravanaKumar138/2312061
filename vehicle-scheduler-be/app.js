
const express = require("express");

const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

const logger = require("./middleware/logger");

app.use(express.json());

app.use(logger);

app.use("/api", schedulerRoutes);

module.exports = app;