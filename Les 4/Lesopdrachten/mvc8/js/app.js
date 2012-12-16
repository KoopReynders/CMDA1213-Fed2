/* filename: js/app.js */

(function () {
	"use strict";
	define([
		'jquery',
		'underscore',
		'backbone',
		'bootstrap',
		'router' // Request router.js
	], function ($, Bootstrap, _, Backbone, Router) {
		var initialize = function () {
			// Pass in our Router module and call it's initialize function
			Router.initialize();
		}

		return {
			initialize: initialize
		};
	});
}());