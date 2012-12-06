// define tournaments view
App.LeagueView = Backbone.View.extend({
    el: $("#league"),

    initialize: function () {
        this.collection = new App.League(App.leagueData);
        this.render();
    },

    render: function () {
        var that = this;
		
        _.each(this.collection.models, function (item) {
            that.renderTournament(item);
        }, this);
    },

    renderTournament: function (item) {
        var tournamentView = new App.TournamentView({
            model: item
        });
        this.$el.append(tournamentView.render().el);
    }
});


//create instance of master view
App.league = new App.LeagueView();