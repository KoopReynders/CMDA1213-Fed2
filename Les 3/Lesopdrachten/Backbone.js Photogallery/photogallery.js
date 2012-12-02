// Photo model
var Photo = Backbone.Model.extend({
	// Default attributes for the photo
	defaults: {
		// Ensure that each photo created has an `src`. src: "placeholder.jpg",
		caption: "A default image",
		viewed: false
	},

	// Initialize function is run on initialization of model
	initialize: function() {
	
	}
});


// Photogallery, a collection of photos
var PhotoGallery = Backbone.Collection.extend({ 
	// Reference to this collection's model.
	model: Photo,
	
	// Filter down the list of all photos that have been viewed
	viewed: function() {
		return this.filter(function(photo){ 
			return photo.get('viewed'); 
		});
	},
	
	// Filter down the list to only photos that have not yet been viewed
	unviewed: function() {
		return this.without.apply(this, this.viewed()); 
	}
});


var buildPhotoView = function( photoModel, photoController ){ 
	//
	var base = document.createElement('div'),
		photoEl = document.createElement('div'); 
	
	//
	base.appendChild(photoEl);
	
	//
	var render = function(){
		// We use a templating library such as Underscore templating which generates the HTML for our photo entry
		photoEl.innerHTML = _.template('photoTemplate', {src: photoModel.getSrc()});
	}

	//
	photoModel.addSubscriber( render );

	//
	photoEl.addEventListener('click', function(){ 
		photoController.handleEvent('click', photoModel );
	});
	
	//
	var show = function(){ 
		photoEl.style.display = '';
	}
	
	//
	var hide = function(){ 
		photoEl.style.display = 'none';
	}

	//
	return{
		showView: show,
		hideView: hide 
	}
}

//
var PhotoRouter = Backbone.Router.extend({ 
	routes: { "photos/:id": "route" },
	route: function(id) {
	var item = photoCollection.get(id);
	var view = new PhotoView({ model: item });
	something.html( view.render().el ); }
}):




