// Set up MySQL connection.
var mysql = require("mysql2");

var connection = mysql.createConnection({
    port: 3306,
    host: "burger.c5as4a600lqv.us-east-2.rds.amazonaws.com",
    user: "smart_admin",
    password: "Smartfolio7*",
    database: "burger"
});


//connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;