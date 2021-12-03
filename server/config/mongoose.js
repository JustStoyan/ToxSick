const mongoose = require('mongoose');
const config = require('../config');


const dbConnection = () => {
    mongoose.connect(config.DB_URI);

    const db = mongoose.connection;

    db.on('error', err => console.log(err));
    db.once('open', conn => console.log('DB Connected'));
}

module.exports = dbConnection;
