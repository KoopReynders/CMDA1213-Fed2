// Every object has a **prototype property** containing a **prototype object** to which you can add properties & methods. 
// When a **new instance** of an object is made, the instance has a direct link to the **prototype** of its **constructor**, and thus the instance inherits all properties and methods of its constructor.

/**
 *	Object Constructor using 'prototype'
 *	
 *
 */

// **Alien** Constructor class
function Alien(name) {
	// **Alien** property
	this.name = name;
}

// Alien method added to the prototype object
Alien.prototype.speak = function () {
	console.log('Hi, my name is ' + this.name);
};

// Creating new **Alien** instances
var rob = new Alien('Robert Rock');
var roberta = new Alien('Roberta Rock');

// Log **Alien** method
rob.speak();
roberta.speak();