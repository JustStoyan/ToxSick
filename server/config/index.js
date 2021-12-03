const config = {

    development: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost/db_toxsick',


    },

    production: {
        PORT: 80,
        DB_URI: 'Atlas link goes here',

    }

}



module.exports = config[process.env.NODE_ENV.trim()];