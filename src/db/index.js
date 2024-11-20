const {Pool} = require('pg')
const {DB_HOST, DB_PORT, DB_USER,DB_PASSWORD,DB_NAME} = require('../constants')
const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

module.exports = {
    query: (text, params) => pool.query(text,params),
}