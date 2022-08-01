const mysql = require('mysql2');
const dbconf = {
    host: "db-prueba.c0vgzyzevxue.us-east-1.rds.amazonaws.com",
    port: "3310",
    user: "admin",
    password: "admin123",
    database: "reto_tecnico",
    dateStrings: true
};
const dbconnection = mysql.createConnection(dbconf);

dbconnection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log("conectado a mysql!");
    }
});

module.exports = dbconnection;