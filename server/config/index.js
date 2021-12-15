const config = {

    development: {
        PORT: 5000,
        DB_URI: 'mongodb+srv://toxsickadmin:123asd!%40%23@toxsickcluster.v3m7p.mongodb.net/test',
    },

    production: {
        PORT: 80,
        DB_URI: 'mongodb+srv://toxsickadmin:123asd!%40%23@toxsickcluster.v3m7p.mongodb.net/test',
    }

}



module.exports = config[process.env.NODE_ENV.trim()];