// define individual tournament view
FED2.TournamentView = Backbone.View.extend({
    tagName: "li",
    template: $("#tournamentTemplate").html(),
	
	events: {
	    "click a.delete": "deleteTournament"
	},
	
	deleteTournament: function () {
	   var removedType = this.model.get("schedulingFormat").toLowerCase();
	    this.model.destroy();
	    this.remove();
	    if (_.indexOf(directory.getTypes(), removedType) === -1) {
	        directory.$el.find("#filter select").children("[value='" + removedType + "']").remove();
	    }
	},
	
    render: function () {
        var tmpl = _.template(this.template);;
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});