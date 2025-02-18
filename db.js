// db.js
const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306, // Add this line
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Promisify the pool query method for easier use with async/await
const promisePool = pool.promise();

module.exports = promisePool;