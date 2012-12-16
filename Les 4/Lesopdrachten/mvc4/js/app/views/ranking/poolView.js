// Define pool view
FED2.PoolView = Backbone.View.extend({
	// Define element (this.el)     
	el: $("#pool"),
	
	// Initialize view
    initialize: function () {
		// Specify collection for this view
		this.collection = new FED2.Pool(FED2.poolData);
		
		// Render view
        this.render();
    },
	
	// Render view
    render: function () {
        var self = this;

        _.each(this.collection.models, function (item) {
            self.renderPool(item);
        }, this);
    },
	
	// Render schedule
    renderPool: function (item) {
		// Create new instance of GameView
		var teamView = new FED2.TeamView({
            model: item
        });

		// Append the rendered HTML to the views element
        this.$el.append(teamView.render().el);
    }
});

// Kickstart the application by creating an instance of LeagueView
var schedule = new FED2.PoolView();