/**
 *	Object constructor with argument, property & method
 *	
 *
 */


function Alien(name) {
	this.name = name;
	
	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
}
var rob = new Alien('Robert Rock');

rob.speak();