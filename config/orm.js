// Import MySQL connection
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.
var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations
            value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
    }
}