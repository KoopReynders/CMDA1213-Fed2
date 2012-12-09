// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),

    initialize: function () {
        this.collection = new FED2.League(FED2.leagueData);
		
		// sort collection
		this.collection.comparator = function(league) {
			return league.get("name");
		};
		
		this.collection.sort();
		
		// filter 
		var filtered = _.filter(this.collection.models, function(data) {
		  	return data.get("schedulingFormat") == "swiss";
		});
		
		// reject
		var rejected = _.reject(this.collection.models, function(data) {
		  	return data.get("schedulingFormat") == "swiss";
		});
		
		this.render(this.collection.models);
        //this.render(filtered);
		//this.render(rejected);
    },

    render: function (data) {
        var that = this;
		
        _.each(data, function (item) {
            that.renderTournament(item);
        }, this);
    },

    renderTournament: function (item) {
        var tournamentView = new FED2.TournamentView({
            model: item
        });
        this.$el.append(tournamentView.render().el);
    }
});


//create instance of master view
FED2.league = new FED2.LeagueView();