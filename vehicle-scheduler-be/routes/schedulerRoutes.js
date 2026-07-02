const express = require("express");
const router = express.Router();
const schedulerController = require("../controllers/schedulerController");

router.post("/schedule", schedulerController.scheduleVehicle);
router.get("/schedule/:depotId", schedulerController.scheduleTasks);
module.exports = router;