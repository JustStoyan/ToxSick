const express = require('express');
const config = require('./config');
const routes = require('./routes');
const cors = require('cors');
const app = express();

require('./config/mongoose')();
require('./config/express')(app);

app.use(cors());
app.use(routes);





app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));