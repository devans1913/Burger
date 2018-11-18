//Dependencies
var connection = require("./connection.js");

// Helper function for SQL
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(object) {
  var arr = [];

  for (var key in object) {
      arr.push(key + "=" + object[key]);
    }

  return arr.toString();
}

//ORM
var orm = {
	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) { 
				throw err; 
			}
			callback(result);
		});
    },
    
	insertOne: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				console.log("Error with ORM Creation" + err);
			}
			callback(result);
		});

    },
    
	updateOne: function(table, colVals, condition, callback) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(colVals);
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) {
				console.log("Error in devouring the burger " + err);
			}
			callback(result);
		});
    },

    refresh: function(table, objColVal, condition, callback) {
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVal);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				console.log("Error in refreshing" + err);
			}
			callbback(result);
		})
    }
};

//Export the ORM 
module.exports = orm;