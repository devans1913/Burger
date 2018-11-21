// MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'VeriShip$18',
    database: "burgers_db"
  });
};

// Secure connection
connection.connect (); 

// Export connection 
module.exports = connection;