/* filename: js/views/home/home.js */

(function () {
	"use strict";
	define([
		'jquery',
		'underscore',
		'backbone',
		'text!templates/home/home.html'
	], function ($, _, Backbone, HomeTemplate) {
		var HomeView = Backbone.View.extend({
			el: $("#page"),
			render: function () {
				this.el.html(HomeTemplate);
			}
		});
		return new HomeView();
	});
}());