// define individual tournament view
FED2.TournamentView = Backbone.View.extend({
    tagName: "li",
    template: $("#tournamentTemplate").html(),
	
	// Attach event handler to view elements
	events: {
	    "click a.delete": "deleteTournament"
	},
	
	// Delete tournament model
	deleteTournament: function (e) {
		e.preventDefault();
	    
		var removedType = this.model.get("schedulingFormat").toLowerCase();
	    
		this.model.destroy();
	    this.remove();
	    
		if (_.indexOf(FED2.league.getTypes(), removedType) === -1) {
	        FED2.league.$el.find("#filter select").children("[value='" + removedType + "']").remove();
	    }
	},
	
	// Render view
    render: function () {
        var tmpl = _.template(this.template);;
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});