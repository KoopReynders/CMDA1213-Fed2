/* Filename: js/views/tournament/tournament.js */

(function () {
	"use strict";
	define([
		'text!templates/tournament/tournament.html'
	], function (TournamentTemplate) {
		var TournamentView = Backbone.View.extend({
			el: $("#page"),
			render: function () {
				this.el.html(TournamentTemplate);
			}
		});
		return new TournamentView();
	});
}());