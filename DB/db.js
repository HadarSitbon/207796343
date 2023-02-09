const mysql = require('mysql2');
const dbconfig = require('./dbconfig.js');

//create a connection to the db
const connection = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user, 
    password: dbconfig.password,
    database: dbconfig.database
});

// open the mySQL connection 
connection.connect(error => {
    if (error) throw error;
    console.log("Successfuly connected to the db");
});

module.exports = connection; 