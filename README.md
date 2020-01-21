# Taco Time
A Taco Testing Application utilizing Node.js/Express/MySQL/Handlebars/Materialize

## Description

This application shows a simple full stack application with a front end implemented with HTML/CSS and the Materialize framework and the backend used with Node.js and Express. HTML templating is done with the addition of Handlebars.

The user may enter their own unique taco name to add it to the menu. This also adds the new taco entry into the database. The taco entry is added as *available* on the menu and added to the left side of the screen. The user may then choose to eat a taco by clicking on it, which moves it into the opposite and updates its status in the database.

## Demo

The demo of the taco eating application can be found [here](https://secret-lake-55615.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:i3rynn/taco-time.git
	
Next, install the application dependencies.

	cd taco-time
	npm install
	
Run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

**Taco 'bout Tasty!**
