var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var PORT = process.env.PORT || 3000
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give server access.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening at localhost:" + PORT);
});