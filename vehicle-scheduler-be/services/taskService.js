
const axios  = require("axios");
exports.getTasks = async(depotId) => {
    const response = await axios.get(`http://localhost:3000/api/schedule/${depotId}`);
    return response.data;
}