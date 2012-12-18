// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),

    initialize: function () {
        this.collection = new FED2.League(FED2.leagueData);
		
		//this.render(this.collection.models);
		
		/*
		//filter models from collection
		var filtered = _.filter(this.collection.models, function(data) {
		  	return data.get("schedulingFormat") == "regular";
		});
		
		this.render(filtered);
		*/
		
		
		//reject models from collection
		var rejected = _.reject(this.collection.models, function(data) {
		  	return data.get("schedulingFormat") == "swiss";
		});
		
		this.render(rejected);
		
    },

    render: function (data) {
        var that = this;
		console.log(data);
		
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