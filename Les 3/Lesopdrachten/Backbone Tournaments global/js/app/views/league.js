// define league view
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