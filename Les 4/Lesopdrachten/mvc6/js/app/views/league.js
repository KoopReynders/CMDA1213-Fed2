// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),

	events: {
		"change .filter"	: "filter",
		"click .reject"		: "reject",
		"click .reset"		: "reset"
	},

    initialize: function () {
        this.collection = new FED2.League(FED2.leagueData);

		this.collection.on("reset", this.render, this);
		
		this.render(this.collection.models);	
    },

	// Filter models from collection
	filter: function (ev) {
		var target = ev.currentTarget;
		
		var filtered = _.filter(this.collection.models, function(data) { return data.get("schedulingFormat") == target.value; });	

		this.render(this.collection.reset(filtered));
	},
	
	// Reject models from collection
	reject: function () {
		var rejected = _.reject(this.collection.models, function(data) {
		  	return data.get("schedulingFormat") == "unknown";
		});

		this.collection.reset(rejected);
	},
	
	// Reset data
	reset: function () {
		
	},

    render: function (data) {
		console.log("Render: " + data);
        var that = this;
		
        _.each(data, function (item) {
            that.renderTournament(item);
        }, this);
    },

    renderTournament: function (item) {
        var tournamentView = new FED2.TournamentView({
            model: item
        });
        this.$el.find("ul.tournaments").append(tournamentView.render().el);
    }
});


//create instance of master view
FED2.league = new FED2.LeagueView();