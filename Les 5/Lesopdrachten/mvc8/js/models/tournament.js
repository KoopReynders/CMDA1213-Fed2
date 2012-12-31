/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'config'
	], function (config) {
		var TournamentModel = Backbone.Model.extend({
			
			initialize: function () {
   				var scope = this;

				var loadData = function (o) {
					scope.set(o);
				};

			    $.ajax({
			    	// Tournament data
					url: config.api + 'tournaments/' + this.id + "/?callback=?",
					
					// Pool data
					// url: 'https://api.leaguevine.com/v1/pools/?tournament_id=18519&callback=?',
					success: loadData,
					dataType: 'json'
				});

 			},

			defaults: {
				name: 'Leaguevine Tournament',
				scheduling_format: 'Bracket',
				info: '...'
			}
		});
		
		return TournamentModel;
	});
}());