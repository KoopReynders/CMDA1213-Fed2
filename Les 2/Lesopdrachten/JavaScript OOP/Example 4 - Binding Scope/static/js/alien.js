// Binding scope helper function
/**
 *	Alien script
 *	
 *
 */

// Create local scope with self-invoked function, passing jQuery
(function ($) {
	// Define constant variable
	var BASE_IMAGE_URL = './static/images/';
	
	// Constructor object Alien, with two arguments; name & element
	function Alien(name, element) {
		// Define properties of the Alien object
		this.name = name;
		this.visual = $('img');
		this.message = $('figcaption');
		
		// Call speak() method
		this.speak();
		
		// Add click handler to element
		$(element).bind("click", this.behave.bind(this));

	}	
	// Add methods to the Alien object prototype
	Alien.prototype.speak = function () {
		this.message.text('Hi, my name is ' + this.name);
	}
	Alien.prototype.behave = function (event) {
		var element = event.target;
		var action = $(element).attr('class');
		var animation = $(element).attr('data-animation');
		this.visual.attr('src', BASE_IMAGE_URL + action +'.png').attr('class','').addClass('animated ' + animation);
	}
	
	// Binding scope helper function
	Function.prototype.bind = function(scope) {
		var method = this;
		return function() {
			return method.apply(scope, arguments);
		}
	}
	
	// Initialize instance of Alien
	var rob = new Alien('Robert Rock','button');

})(jQuery)
