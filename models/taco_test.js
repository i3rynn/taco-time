// Import the taco model to gain access to the database functions
var taco = require('./taco.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require('../config/connection.js');

// Select all entries from the database
taco.selectAll(function (data) {
	console.log('taco.selectAll test...\n\n');

	console.log('__________Taco Menu__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Taco ID = ' + data[i].id);
		console.log('Taco Name = ' + data[i].taco_name);
		console.log('Available = ' + data[i].devoured);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});

// Insert a single entry into the database
taco.insertOne(['taco_name', 'devoured'], 
	         	 ['Midnight Soft Taco', false], 
	    		 function (data) {
					console.log('\n\ntaco.insertOne test...\n\n');

					console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
				 }
);

// Update a single entry in the database
taco.updateOne({devoured: true}, 'id = 10', function (data) {
	console.log('\n\ntaco.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();