// index.js
const express = require('express');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON (optional for now)
app.use(express.json());

// Test the MySQL connection
db.query('SELECT 1 + 1 AS result')
    .then(([rows]) => {
        console.log('Database connection successful:', rows[0].result);
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});