//Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(express.static(process.cwd() + '/public'));	
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// Set Handlebars.
var exphandles = require("express-handlebars");
app.engine("handlebars", exphandles({ defaultLayout: "main",}));
app.set("view engine", "handlebars");

// Import routes and give the server access
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
var port= process.env.PORT || 8080;
app.listen(port);



