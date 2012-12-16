/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'jquery',
		'underscore',
		'backbone',
		'config'
	], function ($, _, Backbone,config) {
		var TournamentModel = Backbone.Model.extend({
			
			initialize: function () {
   				var scope = this;
				
				var loadData = function (o) {
				    scope.set(o);
				 };

			    $.ajax({
					url: config.api + 'tournaments/' + this.id + "/?callback=?",
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