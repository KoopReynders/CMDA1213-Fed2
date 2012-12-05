// define tournaments view
App.TournamentsView = Backbone.View.extend({
    el: $("#tournaments"),

    initialize: function () {
        this.collection = new App.Tournaments(App.tournamentsData);
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
App.tournaments = new App.TournamentsView();