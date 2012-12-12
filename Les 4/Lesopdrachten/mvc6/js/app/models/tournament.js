// define tournament model
FED2.Tournament = Backbone.Model.extend({
    defaults: {
        "name": "Unknown",
		"schedulingFormat": "Unknown"
    },
	filter: function (target) {
		console.log(target.value);

	}
});