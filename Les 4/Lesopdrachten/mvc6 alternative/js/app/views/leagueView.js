// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),

	events: {
		"change .filter"	: "filter",
		"click .reject"		: "reject"
	},

    initialize: function () {
		this.list = this.$el.find("ul.tournaments");
        this.collection = new FED2.League(FED2.leagueData);
		
		this.render(this.collection.toJSON());	
    },

	// Filter models from collection
	filter: function (ev) {
		// Tell collection there is a filter active
		this.collection.filterState = ev.currentTarget.value;
		// Get new filtered data with toJSON
		var data = this.collection.toJSON();
		
		// Rerender list with filtered data
		this.render(data);
	},
	
	// Reject models from collection
	reject: function () {
		var rejected = _.reject(this.collection.models, function(data) {
		  	return data.get("schedulingFormat") == "unknown";
		});

		this.collection.reset(rejected);
	},
	


    render: function (data) {
        var that = this;

		// first remove the old list
		this.list.html('');
		
		// fill the list again
        _.each(data, function (item) {
            that.renderTournament(item.toJSON());
        }, this);
    },

    renderTournament: function (item) {
        var tournamentView = new FED2.TournamentView({
            model: item
        });
        this.list.append(tournamentView.render().el);
    }
});


//create instance of master view
FED2.league = new FED2.LeagueView();