/* filename: js/models/tournament.js */

(function () {
	"use strict";
	define([
		'config'
	], function (config) {
		var TournamentModel = Backbone.Model.extend({
			// Define API url
			url: config.api + 'tournaments/' + config.tournamentID,


			initialize: function () {
   				this.save({
		            type: 'PUT',
		            contentType: 'application/json',
		            headers: {
		                Authorization: 'bearer '+config.access_token
		            },
		            data: JSON.stringify({
		                "name": "Dodge it best",
		                "season_id": "20157",
		                "start_date": "2013-01-01",
		                "end_date": "2013-02-01",
		                "info": "hello joost"
		            }),
		            success: function(data) {
		                if(typeof data !== 'object') {
		                    data = $.parseJSON(data);
		                }
		                
		                console.log(data);
		            }
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