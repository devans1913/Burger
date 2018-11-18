//Dependencies
var express = require("express");
var exphandles = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Import routes and give the server access
var routes = require("./controllers/burgers_controller.js");


var app = express();
app.set("port", (process.env.PORT || 3306));


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphandles({ defaultLayout: "main",}));
app.set("view engine", "handlebars");


app.use('/', routes);
app.listen(app.get("port"), function() {
	console.log("You are running on port 3306", app.get("port"));
});

