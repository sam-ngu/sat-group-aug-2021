const mysql = require('mysql2/promise');

const SCHEMA = 'employee_cms';


function connect(){

    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: SCHEMA,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USERNAME,

    });

}



module.exports = {
    connect,
    SCHEMA: SCHEMA,
}




