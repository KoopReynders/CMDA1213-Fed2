// define individual tournament view
FED2.TournamentView = Backbone.View.extend({
    tagName: "li",
    template: $("#tournamentTemplate").html(),

    render: function () {
        var tmpl = _.template(this.template);
        
        $(this.el).html(tmpl(this.model.toJSON()));
        return this;
    }
});