// define league, a collection of tournaments
FED2.League = Backbone.Collection.extend({
	//url:"https://api.leaguevine.com/v1/leagues/20107/?callback=?",
	url:"https://api.leaguevine.com/v1/pools/?tournament_id=18519&callback=?",
    model: FED2.Tournament,
	initizialize:function() {
	},
	
	comparator : function(data) {
		return data.get("name");
	},
	parse: function(data) {
		return data.objects;
	}

	
});

//https://api.leaguevine.com/v1/tournaments/?tournament_ids=%5B18588%2C18590%5D&access_token=cfad54a0bc