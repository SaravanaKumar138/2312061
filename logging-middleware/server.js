
const express = require('express');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});