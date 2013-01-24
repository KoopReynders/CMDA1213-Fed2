/* filename: js/router.js */

(function () {
	"use strict";
	define([
		'config',
		'views/home/home',
		'views/tournament/tournament',
		'views/tournament/schedule',
		'views/tournament/ranking',
		'views/tournament/game'
		
	], function (config, homeView, tournamentView, scheduleView, rankingView, gameView) {
		var AppRouter = Backbone.Router.extend({
			tournamentView:"",
			
			// Define routes to pages (hash urls #/page_name)
			routes: {
				// Define some URL routes
				'tournament':   'showTournament',
				'ranking'	: 	'showRanking',
				'schedule'	:   'showSchedule',
				'game'		:   'showGame',

				// Default
				'*path': 'defaultAction'
			},

			showTournament: function (actions) {
				tournamentView.render();
			},

			showSchedule: function (actions) {
				scheduleView.render();
			},

			showRanking: function (actions) {
				rankingView.render();
			},

			showGame: function (actions) {
				gameView.render();
			},

			defaultAction: function (actions) {
				
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