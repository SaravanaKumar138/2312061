
const schedulerService = require("../services/schedulerService");

exports.scheduleTasks = async(req, res) => {
    const depotId = req.params.depotId;
    try {
        const data = schedulerService.schedule(depotId);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
}
