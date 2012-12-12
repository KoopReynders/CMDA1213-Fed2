// Define schedule view
FED2.GameView = Backbone.View.extend({
	// Define element (this.el)     
	el: $("#game"),
	
	// Initialize view
    initialize: function () {
		// Specify collection for this view
		this.collection = new FED2.Game(FED2.gameData);
		
		// Render view
        this.render();
    },
	
	// Render view
    render: function () {
        var self = this;

        _.each(this.collection.models, function (item) {
            self.renderGame(item);
        }, this);
    },
	
	// Render schedule
    renderGame: function (item) {
		// Create new instance of GameView
		var setView = new FED2.SetView({
            model: item
        });

		// Append the rendered HTML to the views element
        this.$el.append(setView.render().el);
    }
});

// Kickstart the application by creating an instance of LeagueView
var schedule = new FED2.GameView();