/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'config'
	], function (config) {
		var TournamentModel = Backbone.Model.extend({
			// Define API url
			url: config.api + 'tournaments/' + config.tournamentID + "/?callback=?",

			initialize: function () {
   				
   				// Fetch dat from API
   				this.fetch();

   				// Save data to API
   				this.set({"name":"Blabla"});
				this.save();


   				/*
   				// Custom data fetching
				var loadData = function (data) {
					this.set(data);
					this.set({"name":"Blabla"});
					this.save();
				};

			    $.ajax({
			    	// Tournament data
					url: config.api + 'tournaments/' + config.tournamentID + "/?callback=?",
					// Pool data
					// url: 'https://api.leaguevine.com/v1/pools/?tournament_id=18519&callback=?',
					context:this,
					success: loadData,
					dataType: 'json'
				});
				*/

 			},

			defaults: {
				name: 'Leaguevine Tournament',
				scheduling_format: 'Bracket',
				info: '...',
				season: {
					id: 1
				}
			}
		});
		
		return TournamentModel;
	});
}());