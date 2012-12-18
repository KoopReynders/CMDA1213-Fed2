// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),

    initialize: function () {
		this.list = this.$el.find("ul.tournaments");
        this.collection = new FED2.League(FED2.leagueData);

		this.render();	
		
		this.$el.find("#filter").append(this.createSelect());
		
		this.on("change:filterType", this.filterByType, this);
        this.collection.on("reset", this.render, this);
    },

	events: {
	    "change #filter select": "setFilter"
	},

    render: function () {
		this.$el.find("ul.tournaments").html("");

		_.each(this.collection.models, function (item) {
        	this.renderLeague(item);
        }, this);
    },

    renderLeague: function (item) {
        var tournamentView = new FED2.TournamentView({
            model: item
        });

        this.list.append(tournamentView.render().el);
    },

	getTypes: function () {
	    return _.uniq(this.collection.pluck("schedulingFormat"), false, function (type) {
	        return type.toLowerCase();
	    });
	},
	
	createSelect: function () {
	    var filter = this.$el.find("#filter"),
	        select = $("<select/>", {
	            html: "<option value='all'>all</option>"
	        });
	    _.each(this.getTypes(), function (item) {
	        var option = $("<option/>", {
	            value: item.toLowerCase(),
	            text: item.toLowerCase()
	        }).appendTo(select);
	    });
	    return select;
	},
	

	
	setFilter: function (e) {
	    this.filterType = e.currentTarget.value;
	    this.trigger("change:filterType");
	},
	
	filterByType: function () {
	    if (this.filterType === "all") {
	        this.collection.reset(FED2.leagueData);
	    } else {
	        this.collection.reset(FED2.leagueData, { silent: true });
	        var filterType = this.filterType,
	            filtered = _.filter(this.collection.models, function (item) {
	            return item.get("schedulingFormat").toLowerCase() === filterType;
	        });
	        this.collection.reset(filtered);
	    }
	}
});


//create instance of master view
FED2.league = new FED2.LeagueView();