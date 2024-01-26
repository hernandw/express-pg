const { Pool } = require('pg')
require("dotenv").config();


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
    allowExitOnIdle: true
})

const getData = async () => {
    const res = await pool.query("Select NOW()")
    console.log(res.rows)
    
}

getData()

module.exports = pool