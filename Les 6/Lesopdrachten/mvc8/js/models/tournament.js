/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'config'
	], function (config) {
		var TournamentModel = Backbone.Model.extend({
			defaults: {
				name: 'Leaguevine Tournament',
				scheduling_format: 'Bracket',
				info: '...',
				season: {
					id: 1
				}
			},
			
			// Define API url
			url: config.api + 'tournaments/' + config.tournamentID + '/?callback=?',
			
			/*
			// Fetch data with custom $.ajax request
			loadData: function(data) {
				this.set(data);
			},
			*/
			
			initialize: function () {
   				/*** Fetch data from API ***/
   				this.fetch();
				
				/*				
			    $.ajax({
					url: config.api + 'tournaments/' + config.tournamentID + '/?callback=?',
					context:this,
					success: this.loadData,
					dataType: 'json'
				});
				*/
 			}
		});
		
		return TournamentModel;
	});
}());