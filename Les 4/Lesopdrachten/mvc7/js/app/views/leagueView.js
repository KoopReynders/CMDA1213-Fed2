// define tournaments view
FED2.LeagueView = Backbone.View.extend({
    el: $("#league"),
	
    initialize: function () {
		this.list = this.$el.find("ul.tournaments");
        this.collection = new FED2.League(FED2.leagueData);

		this.render();	
		
		this.$el.find("#filter").append(this.createSelect());
		
		// Attach custom event handler
		this.on("change:filterType", this.filterByType, this);
		
		// Attach eventhandlers to collection
        this.collection.on("reset", this.render, this);
		this.collection.on("add", this.renderLeague, this);
		this.collection.on("remove", this.removeTournament, this);
    },

	// Attach event handlers to view elements
	events: {
	    "change #filter select": "setFilter",
		"click #add": "addTournament",
		"click #showForm": "showForm"
	},
	
	// Render the view
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
	
	// Add tournament model
	addTournament: function (e) {
	    e.preventDefault();
	    var newModel = {};
	    $("#addTournament").children("input").each(function (i, el) {
	        if ($(el).val() !== "") {
	            newModel[el.id] = $(el).val();
	      }
	    });
	    FED2.leagueData.push(newModel);
	    
	    if (_.indexOf(this.getTypes(), newModel.schedulingFormat) === -1) {
	         this.collection.add(new FED2.Tournament(newModel));
	         this.collection.reset(FED2.leagueData);
	        this.$el.find("#filter").find("select").remove().end().append(this.createSelect());
	    } else {
	        this.collection.add(new FED2.Tournament(newModel));
	        
	    }
	    this.collection.reset(FED2.leagueData);
	    
	},
	
	// Remove tournament model
	removeTournament: function (removedModel) {
	    var removed = removedModel.attributes;
	    _.each(FED2.leagueData, function (item) {
	        if (_.isEqual(item, removed)) {
	            FED2.leagueData.splice(_.indexOf(FED2.leagueData, item), 1);
	        }
	    });
	    this.collection.reset(FED2.leagueData);
	},

	// Get types for schedulingFormat select box
	getTypes: function () {
	    return _.uniq(this.collection.pluck("schedulingFormat"), false, function (type) {
	        return type.toLowerCase();
	    });
	},
	
	// Create schedulingFormat select box
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
	
	// Set filter
	setFilter: function (e) {
	    this.filterType = e.currentTarget.value;
	    
		// Trigger custom event handler
		this.trigger("change:filterType");
	},
	
	// Filter the collection
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
	},
	
	showForm: function (e) {
		e.preventDefault();
	    this.$el.find("#addTournament").slideToggle();
	}
});


//create instance of master view
FED2.league = new FED2.LeagueView();