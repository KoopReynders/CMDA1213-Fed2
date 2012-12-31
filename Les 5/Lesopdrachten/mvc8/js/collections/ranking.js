define([
  'jquery',
  'underscore',
  'backbone',
  'models/team'
], function($, _, Backbone, teamModel){
  var rankingCollection = Backbone.Collection.extend({
    model: teamModel,
    initialize: function(){

    }

  });

  return new rankingCollection;
});
