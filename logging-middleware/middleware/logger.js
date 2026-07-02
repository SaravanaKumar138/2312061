const Log = require("./logService");

const logger = async (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);

  await Log(
    "backend",
    "info",
    "middleware",
    `${req.method} ${req.originalUrl} requested`,
  );

  next();
};

module.exports = logger;
