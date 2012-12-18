// define league, a collection of tournaments
FED2.League = Backbone.Collection.extend({
    model: FED2.Tournament,
	initizialize:function() {
		this.filterState = false;
	},
	comparator : function (league) {
		return league.get("name");
	},
	toJSON: function() {
		if(this.filterState && this.filterState !== "all") {
			var self = this;
			return _.filter(this.models, function(model){
				return model.get("schedulingFormat") == self.filterState;
			});
		} else {
			return _.map(this.models, function(model){
				return model;
			});
		}
		
	}
	
});