const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jwt_authform',
    port: 5432,
    password: 'Boriska474'
})

module.exports = pool