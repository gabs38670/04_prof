const mysql = require ('mysql2')

const pool = mysql.createPool({
    conectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

  module.exports = pool