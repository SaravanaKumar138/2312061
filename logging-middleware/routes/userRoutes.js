const express = require("express");

const router = express.Router();

const Log = require("../middleware/logService");

router.get("/", async (req, res) => {
  await Log("backend", "info", "handler", "Fetching all users");

  res.json([
    {
      id: 1,
      name: "Saravana",
    },
    {
      id: 2,
      name: "Kumar",
    },
  ]);
});

router.get("/error", async (req, res) => {
  try {
    throw new Error("Something went wrong");
  } catch (err) {
    await Log("backend", "error", "handler", err.message);

    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;


