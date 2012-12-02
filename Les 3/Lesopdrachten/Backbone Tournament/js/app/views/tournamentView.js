//define individual contact view
window.TournamentView = Backbone.View.extend({
    el: "#tournament",
    template: $("#tournamentTemplate").html(),
	initialize: function (){
		console.log("view initialized");
	},

    render: function () {
	
        var tmpl = _.template(this.template);
        
        $(this.el).html(tmpl(this.model.toJSON()));
        return this;
    }
});