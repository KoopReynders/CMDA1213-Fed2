//Tournaments Web App *(Backbone example application)*
/**
 *	Tournaments Web App (Backbone example application)
 *	
 *
 */

// Anonymous self-invoked function with jQuery mapped to $
(function ($) {

    // # League data #
    leagueData = [
        { name: "Threesome Ultimate Tournament", schedulingFormat:"regular"},
		{ name: "Wisconsin Swiss 2012", schedulingFormat:"swiss"},
		{ name: "New York City PoNY", schedulingFormat:"regular"},
		{ name: "Swiss Chalet"}
    ];

	// # Define tournament model #
	Tournament = Backbone.Model.extend({
		// Set model defaults *(backbone method)*
		defaults: {
			"name": "Tournament name unknown",
			"schedulingFormat":"unknown"
		},
		
		// Initialize model *(backbone method)*
		initialize: function () {
			this.logMessage("Tournament model initialized");
		},
		
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
	});

	// # Define league collection #
	League = Backbone.Collection.extend({
	    // Specifiy model for this collection
		model: Tournament,
		
		// Initialize collection *(backbone method)*
		initialize: function () {
			this.logMessage("League collection initialized");
		},
		
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
	});
	
	// # Define tournament view #
	TournamentView = Backbone.View.extend({
	    // Define element (this.el)  
		tagName: "li",
		
		// Set reference to template
	    template: $("#tournamentTemplate").html(),
		
		// Initialize view *(backbone method)*
		initialize: function () {
			this.logMessage("Tournament view initialized");
		},
		
		// Render view *(backbone method)*
	    render: function () {
			// Store template in variable
	        var tmpl = _.template(this.template);
			
			// Inject the rendered tempate into the views element 
	        $(this.el).html(tmpl(this.model.toJSON()));
	
			return this;
	    },
	
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
	});
	
	// # Define league view #
	LeagueView = Backbone.View.extend({
		// Define element (this.el)     
		el: $("#league"),
		
		// Initialize view *(backbone method)*
	    initialize: function () {
			this.logMessage("League view initialized");
	        
			// Specify collection for this view
			this.collection = new League(leagueData);
			
			// Render view
	        this.render();
			
	    },
		
		// Render view *(backbone method)*
	    render: function () {
	        var self = this;

	        _.each(this.collection.models, this.renderTournament, this);
	    },
		
		// Render tournament *(custom method)*
	    renderTournament: function (item) {
			// Create new instance of TournamentView
			var tournamentView = new TournamentView({
	            model: item
	        });
	
			// Append the rendered HTML to the views element
	        this.$el.append(tournamentView.render().el);
	    },
	
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
		
	});
	
    // Kickstart the application by creating an instance of LeagueView
    var tournaments = new LeagueView();

} (jQuery));