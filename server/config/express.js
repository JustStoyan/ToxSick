const express = require('express');


const setupExpress = (app) => {

    app.use(express.json());

}


module.exports = setupExpress;