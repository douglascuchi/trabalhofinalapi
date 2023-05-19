const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    database: 'loja',
    user: 'admin',
    password: 'admin',
    port: 3000
})

module.exports = { query: (text, params) => pool.query(text, params)}