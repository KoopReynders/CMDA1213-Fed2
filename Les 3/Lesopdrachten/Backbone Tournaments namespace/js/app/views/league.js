// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),

    initialize: function () {
        this.collection = new FED2.League(FED2.leagueData);
        this.render();
    },

    render: function () {
        var that = this;
		
        _.each(this.collection.models, function (item) {
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