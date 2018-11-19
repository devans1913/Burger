//Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphandles = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + '/public'));
	
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphandles({ defaultLayout: "main",}));
app.set("view engine", "handlebars");

// Import routes and give the server access
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
var port=8080;
app.listen(port);



