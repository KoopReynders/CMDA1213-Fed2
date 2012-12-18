/* Filename: js/views/tournament/tournament.js */

(function () {
	"use strict";
	define([
		'jquery',
		'underscore',
		'backbone',
		'models/tournament',
		'text!templates/tournament/tournament.html'
	], function ($, _, Backbone, TournamentModel, tournamentTemplate) {
		var TournamentView = Backbone.View.extend({
			el: $("#page"),
			initialize: function () {
				this.model.bind('change', this.render, this);	
			},
			render: function () {
				var data = {
					tournament: this.model,
					_: _
				};
				var compiledTemplate = _.template(tournamentTemplate, data);
				this.el.html(compiledTemplate);
			}
		});
		return TournamentView;
	});
}());