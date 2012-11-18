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
		
		var self = this;
		
		$(element).click(function(){
			var action = $(this).attr('class')
			
			switch (action) {
				case 'laugh': 
					this.laugh();
				break;
				case 'faint': 
					this.faint();
				break;
				case 'cry': 
					this.cry();
				break;
				case 'rage': 
					this.rage();
				break;
				case 'scares': 
					this.scares();
				break;
				case 'sleep': 
					this.sleep();
				break;
			
				default : console.log('No action');
			}
		});
	}

	Alien.prototype.speak = function () {
		this.message.text('Hi, my name is ' + this.name);
	}
	Alien.prototype.laugh = function () {
		this.visual.attr('src', BASE_IMAGE_URL + 'laugh.png').attr('class','').addClass('animated wobble');
	}
	Alien.prototype.faint = function () {
		this.visual.attr('src', BASE_IMAGE_URL + 'faint.png').attr('class','').addClass('animated lightSpeedIn');
	}
	Alien.prototype.cry = function () {
		this.visual.attr('src', BASE_IMAGE_URL + 'cry.png').attr('class','').addClass('animated flipInX');
	}
	Alien.prototype.rage = function () {
		this.visual.attr('src', BASE_IMAGE_URL + 'rage.png').attr('class','').addClass('animated rotateIn');
	}
	Alien.prototype.scares = function () {
		this.visual.attr('src', BASE_IMAGE_URL + 'scares.png').attr('class','').addClass('animated swing');
	}

	var roberta = new Alien('Roberta Rock','button');

})(jQuery)

