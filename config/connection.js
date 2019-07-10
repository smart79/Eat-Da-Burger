// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
    port: 3306,
    host: "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ceehfdlhv0lh25a8",
    password: "wr0cqy0zu14cba5a",
    database: "ngy0gea84hk25mwp"
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