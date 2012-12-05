// define tournaments view
TournamentsView = Backbone.View.extend({
    el: $("#tournaments"),

    initialize: function () {
        this.collection = new Tournaments(tournamentsData);
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