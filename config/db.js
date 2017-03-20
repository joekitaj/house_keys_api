// Allows for connection to database
const pgp = require('pg-promise')();

// Specifies database
const db = pgp(connections);

const connection = process.env.DATABASE_URL || 'postgress://localhost:5432/forum';

module.exports = db;
