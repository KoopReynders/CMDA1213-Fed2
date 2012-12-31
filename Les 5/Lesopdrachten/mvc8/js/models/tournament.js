/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'jquery',
		'underscore',
		'backbone',
		'bootstrap',
		'config'
	], function ($, _, Backbone, Bootstrap, config) {
		var TournamentModel = Backbone.Model.extend({
			
			initialize: function () {
   				var scope = this;

				var loadData = function (o) {
					//console.log("Objects", o.objects[0].standings);
					scope.set(o);
				};

			    $.ajax({
			    	// Tournament data
					//url: config.api + 'tournaments/' + this.id + "/?callback=?",
					// Pools data
					url: 'https://api.leaguevine.com/v1/pools/?tournament_id=18519&callback=?',
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