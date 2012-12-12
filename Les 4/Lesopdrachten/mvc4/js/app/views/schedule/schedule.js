// Define schedule view
FED2.ScheduleView = Backbone.View.extend({
	// Define element (this.el)     
	el: $("#schedule"),
	
	// Initialize view
    initialize: function () {
		// Specify collection for this view
		this.collection = new FED2.Schedule(FED2.scheduleData);
		
		
		// Render view
        this.render();
    },
	
	// Render view
    render: function () {
        var self = this;

		_.each(this.collection.models, function (item) {
            self.renderSchedule(item);
        }, this);
    },
	
	// Render schedule
    renderSchedule: function (item) {
		// Create new instance of GameView
		var gameView = new FED2.GameView({
            model: item
        });

		// Append the rendered HTML to the views element
        this.$el.append(gameView.render().el);
    }
});

// Kickstart the application by creating an instance of LeagueView
var schedule = new FED2.ScheduleView();