const axios = require("axios");
require("dotenv").config();


async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      process.env.LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("Log sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Logging Failed");

    if (error.response) {
      console.log("Status :", error.response.status);
      console.log("Response :", error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

module.exports = Log;
