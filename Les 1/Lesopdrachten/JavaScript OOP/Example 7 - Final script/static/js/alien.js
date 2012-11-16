/**
 *	Adding events
 *	
 *
 */
(function ($) {
	var BASE_IMAGE_URL = './static/images/'
	
	function Alien(name,element) {
		this.name = name;
		this.visual = $('img');
		this.message = $('figcaption');
		
		this.speak();
		
		var alienScope = this;
		
		$(element).click(function(){
			var action = $(this).attr('class');
			var animation = $(this).attr('data-animation');
			alienScope.behave (action, animation);
		});
	}

	Alien.prototype.speak = function () {
		this.message.text('Hi, my name is ' + this.name);
	}
	Alien.prototype.behave = function (action, animation) {
		this.visual.attr('src', BASE_IMAGE_URL + action +'.png').attr('class','').addClass('animated ' + animation);
	}
	
	var roberta = new Alien('Roberta Rock','button');

})(jQuery)

