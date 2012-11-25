// Inheritance extend function. A function like this is used in all major framworks (such as Backbone). 
/**
 *	Inheritance extend function
 *	
 *  
 *
 */

//In this **extendsFrom** function the Super object is passed as a parameter. A new function is returned with all arguments of the Super and the Sub objects combined and the prototype is set to the prototype of the Super object.
Function.prototype.extendsFrom = function(Super) {
	var Self = this; 
	var Func = function() {
		Super.apply(this, arguments);
		Self.apply(this, arguments);
	}
	Func.prototype = new Super();
	return Func;
}

// **Animal** super class
function Animal(name) {
	this.name = name;
}
	// **Animal** method
	Animal.prototype.show = function() {
		return this.name;
	}

// **Penguin** sub class
function Penguin(name, skin) {
	this.skin = skin;	
}
	// **Penguin** extends methods & properties from **Animal**
	Penguin = Penguin.extendsFrom(Animal);

// **Emperor** sub sub class	
function Emperor(name, skin) {
	
}
	// **Emperor** extends methods & properties from **Penguin**
	Emperor = Emperor.extendsFrom(Penguin);

// Initialize new **Penguin** and **Emperor** instances
penguin = new Penguin('Happy Feet');
jules = new Emperor('Julius Caesar', 'Waterproof');

// Log inherited method from **Animal**
console.log( penguin.show() );

// Log inherited method from **Animal** and inherited property from **Penguin**
console.log( jules.show() + "s skin is " + jules.skin );


