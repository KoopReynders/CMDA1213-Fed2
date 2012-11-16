/**
 *	Create local scope with self invoking function
 *	
 *  ToDo: use 'return' to make local information available
 */

function Alien(name) {
	this.name = name;
}
	Alien.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

var rob = new Alien('Robert Rock');

rob.speak();

(function () {
	function Alien(name) {
		this.name = name;
	}
	
	Alien.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
	
	var roberta = new Alien("Roberta Rock");
	
	var breakpoint = 'let\'s stop the application here';
	
	roberta.speak();
})()
