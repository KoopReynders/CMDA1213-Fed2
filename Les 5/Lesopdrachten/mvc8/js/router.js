/* filename: js/router.js */

(function () {
	"use strict";
	define([
		'jquery',
		'underscore',
		'backbone',
		'config',
		'models/tournament',
		'views/home/home',
		'views/tournament/tournament'
		
	], function ($, _, Backbone, config, TournamentModel, homeView, TournamentView) {
		var AppRouter = Backbone.Router.extend({
			tournamentView:"",
			routes: {
				// Define some URL routes
				'tournament': 'showTournament',
				// Default
				'*path': 'defaultAction'
			},
			showTournament: function (actions) {
				// Call render on the module we loaded in via the dependency array

				var tournamentModel = new TournamentModel({id:config.tournamentID});
				this.tournamentView = new TournamentView({model: tournamentModel});
				this.tournamentView.render();
			},
			defaultAction: function (actions) {
				// We have no matching route, lets display the home page
				homeView.render();
			}
		});
		var initialize = function () {
			var app_router = new AppRouter();
			Backbone.history.start();
		};
		return {
			initialize: initialize
		};
	});
}());