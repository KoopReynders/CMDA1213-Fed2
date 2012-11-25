// How the prototype chain works: if a property is not defined for a class, this class's prototype chain will be traversed upwards until one is found (or not) in a parent (higher) class.
/**
 *	Inherit & prototype chain
 *	
 *  
 *
 */

// Animal super class
function Animal(name, numLegs) {
    // Animal properties
	this.name = name;
	this.numLegs = numLegs;
	this.isAlive = true;
}
// Animal method
Animal.prototype.sayName = function () {
	return this.name;
};

// Penguin sub class
function Penguin(name) {
    // Penguin properties
	this.name = name;
	this.numLegs = 2;
}

// Set Penguin prototype to Animal so that Penguin can inherit from it
Penguin.prototype = new Animal();
// Set constructor back to Penguin, so that other classes can inherit from it 
Penguin.prototype.constructor = Penguin;

// Penguin  method
Penguin.prototype.eatFish = function () {
	return 'Yummy!!';
};

// Emperor penguin sub sub class
function Emperor(name) {
	// Emperor properties
	this.name = name;
	this.sound = "Waddle waddle";
}

// Set Emperor prototype to Penguin so that Emperor can inherit from it
Emperor.prototype = new Penguin();
// Set contructor back to Emperor, so that other classes can inherit from it 
Emperor.prototype.constructor = Emperor;

// Emperor method
Emperor.prototype.sleep = function () {
	return 'Zzzzzz!!';
};

// Initialize new Emperor instances
var jules = new Emperor("Julius Caesar");
var nero = new Emperor("Nero Claudius");

// Emperor instances inherit properties and methods from Animal & Penguin 

// Log inherited method from Animal
console.log( jules.sayName() );

// Log inherited method from Penguin 
console.log( "Likes to eat fish. " + jules.eatFish() );

// Log Emperor method
console.log( "Sleeps a lot: " + jules.sleep() );

// Log inherited method from Animal
console.log( nero.sayName() );

// Log inherited property from Animal 
console.log( "Has " + nero.numLegs + " legs!" )

// Log inherited property from Penguin
console.log( "Likes to say: " + nero.sound );


