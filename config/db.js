// Allows for connection to database
const pgp = require('pg-promise')();
const connection = process.env.DATABASE_URL || 'postgress://localhost:5432/forum';

// Specifies database
const db = pgp(connection);


module.exports = db;
