const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    database: 'loja',
    user: 'douglas',
    password: '12345',
    port: 5433
})

module.exports = { query: (text, params) => pool.query(text, params)}