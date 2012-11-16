/**
 *	Create local scope with self-invoking function and pass jQuery
 *	
 *
 */

(function ($) {
	var BASE_IMAGE_URL = './static/images/';
	
	function Alien(name) {
		this.name = name;
		this.message = $('figcaption');
	}
	
	Alien.prototype.speak = function () {
		this.message.text('Hi, my name is ' + this.name);
	}

	var roberta = new Alien('Roberta Rock');

	roberta.speak();
})(jQuery)


