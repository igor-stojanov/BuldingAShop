const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'web-store',
    password: 'password'
});

module.exports = pool.promise();