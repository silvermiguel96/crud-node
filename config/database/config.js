const Pool = require("pg").Pool;
//const pool = new Pool({
//    user: process.env.BD_USER,
//    host: process.env.BD_HOST,
//    database: process.env.BD_DATABASE,
//    password: process.env.BD_PASSWORD,
//    port: process.env.BD_PORT,
//})
const connectionString = process.env.BD_CLIENT;

const pool = new Pool({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;
