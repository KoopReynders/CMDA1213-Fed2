// define league, a collection of tournaments
FED2.League = Backbone.Collection.extend({
    model: FED2.Tournament,
	
	comparator : function (league) {
		return league.get("name");
	},
	
	filtered: function (target) {
		var filtered = _.filter(this, function(data) {
		  	return data.get("schedulingFormat") == target.value;
		});
	}
});