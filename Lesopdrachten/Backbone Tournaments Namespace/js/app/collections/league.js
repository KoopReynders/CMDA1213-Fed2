// define league, a collection of tournaments
App.League = Backbone.Collection.extend({
    model: App.Tournament
});