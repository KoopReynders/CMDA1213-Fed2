// Define game view
FED2.TeamView = Backbone.View.extend({
    // Define element (this.el)  
	tagName: "tr",
	
	// Set reference to template
    template: $("#teamTemplate").html(),
	
	// Initialize view
	initialize: function () {
	},
	
	// Render view
    render: function () {
		// Store template in variable
        var tmpl = _.template(this.template);
		
		// Inject the rendered tempate into the views element 
        $(this.el).html(tmpl(this.model.toJSON()));

		return this;
    }
});