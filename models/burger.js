//Import ORM
var orm = require('../config/orm.js');

//Functions to interact with DB
var burger = {
	all: function(callback) {
		orm.selectAll("burger", function(data) {
			callback(data);
		});
	},
	create: function(cols, vals, callback) {
		orm.insertOne("burger", cols, vals, function(data) {
			callback(data);
		});
	},
	update: function(objColVal, condition, callback) {
		orm.updateOne('burger', objColVal, condition, function(data) {
			callback(data);
		});
	},
	refresh: function(objColVal, condition, callback) {
		orm.refresh("burger", objColVal, condition, function(data) {
			callback(data);
		});
	}
};

//Export DB burger functions
module.exports = burger;