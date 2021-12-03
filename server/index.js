const express = require('express');
const config = require('./config');
const app = express();

require('./config/mongoose')()




app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));