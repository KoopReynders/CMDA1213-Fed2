(function ($) {

    // Tournament data
    leagueData = [
        { name: "Threesome Ultimate Tournament", schedulingFormat:"regular", info:"..."},
		{ name: "Wisconsin Swiss 2012", schedulingFormat:"swiss", info:"..."},
		{ name: "New York City PoNY", schedulingFormat:"regular", info:"..."},
		{ name: "Swiss Chalet", schedulingFormat:"swiss", info:"..."}
    ];

	// define tournament model
	Tournament = Backbone.Model.extend({
		defaults: function () {
			
		}
	});

	// define tournaments collection
	League = Backbone.Collection.extend({
	    model: Tournament
	});
	
	// define individual tournament view
	TournamentView = Backbone.View.extend({
	    tagName: "li",
	    template: $("#tournamentTemplate").html(),

	    render: function () {
	        var tmpl = _.template(this.template);

	        $(this.el).html(tmpl(this.model.toJSON()));
	        return this;
	    }
	});
	
	// define tournaments view
	LeagueView = Backbone.View.extend({
	    el: $("#league"),

	    initialize: function () {
	        this.collection = new League(leagueData);
	        this.render();
	    },

	    render: function () {
	        var that = this;

	        _.each(this.collection.models, function (item) {
	            that.renderTournament(item);
	        }, this);
	    },

	    renderTournament: function (item) {
	        var tournamentView = new TournamentView({
	            model: item
	        });
	        this.$el.append(tournamentView.render().el);
	    }
	});
	
    //create instance of master view
    var tournaments = new LeagueView();

} (jQuery));