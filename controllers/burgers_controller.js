//Express, Router and burger.js
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Create Router for app 
router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get("/burgers", function(request, response) {
	burger.all(function(data) {
		
		// Will handles the handlebars argument in the .handlebars files.
		var handlebarsObject = { burger: data };
		console.log(handlebarsObject);
		
		response.render("index", handlebarsObject);
	});
});

//Submit Data
router.post("/burgers/create", function(request, response) {
	var BurgerName = request.body.name;

    // Sends name of the new burger
	burger.create(["burger_name"], [request.body.burger_name], function(data) {
			response.redirect('/burgers');
		});
});

//Update Data
router.put("/burger/update/:id", function(reqest, response) {

	var condition = "id = " + reqest.params.id;

	burger.devour({ devoured: true }, condition, function(data) {
		response.redirect('/burgers');
	});
});

router.put('/burger_reorder/:id', function(request, response) {

	var condition = "id = " + request.params.id;

	burger.refresh({ devoured: false }, condition, function(data) {
		response.redirect('/burgers');
	});
})

//Export routes
module.exports = router;