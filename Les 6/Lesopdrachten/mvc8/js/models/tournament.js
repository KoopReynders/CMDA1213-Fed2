/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'config'
	], function (config) {
		var TournamentModel = Backbone.Model.extend({
			url:config.api + 'tournaments/' + config.tournamentID + "?access_token=e5cd000956",

			initialize: function () {
   				var self = this;

				var loadData = function (data) {
					self.set(data);
					self.set({"name":"Blabla"});
					self.save();
				};

			    $.ajax({
			    	// Tournament data
					url: config.api + 'tournaments/' + config.tournamentID + "/?callback=?",
					// Pool data
					// url: 'https://api.leaguevine.com/v1/pools/?tournament_id=18519&callback=?',
					success: loadData,
					dataType: 'json'
				});

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