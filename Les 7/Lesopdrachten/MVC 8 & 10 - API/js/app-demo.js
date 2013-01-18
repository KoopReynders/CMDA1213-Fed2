var config = {
    tournamentID: 18488,
    access_token: '109f8a19ae',
    api_url: 'https://api.leaguevine.com/v1/tournaments/',
    season_id: '20157'
}

var Model = Backbone.Model.extend({});

var View = Backbone.View.extend({
    initialize: function() {
        var self = this;
        this.collection = new Collection();
        this.collection.fetch({
            success: function(data) {
                _.each(self.collection.models, function(model){
                    // set a resource uri on the model
                    model.url = model.get('resource_uri');
                    Console.log('Model.url', model.get('resource_uri'));
                });
                self.addTournament();
            }
        });
    },
    
    addTournament: function() {
        var tournament = {
            name: 'Demo tournament with API!',
            start_date: '2013-05-10',
            end_date: '2013-05-15',
            season_id: config.season_id
        }
        
        // create a new model by passing properties into the Model() constructor
        var newModel = new Model(tournament);
        
        // if we want to POST a new tournament model, we need the api_url
        // see: https://www.leaguevine.com/docs/api/
        newModel.url = config.api_url;
        
        console.log('newModel before save', newModel);
        console.log('newModel.toJSON before save', newModel.toJSON());
        
        // save(data, options)
        newModel.save(newModel.toJSON(), {
            success: function(data) {
                // when this model is saved, we want to be able to update it
                // when a model is saved, it gets properties that are returned by the API!
                // we can log the data that is in the model => console.log(newModel.toJSON);
               
                console.log('newModel.toJSON after save',newModel.toJSON()); 
                newModel.url = newModel.get('resource_uri');

                // Do other stuff, like re-rendering the view, etc
            },
            error: function(data) {
                console.log('error');
            },
            headers: {
                // we need to authorize for this.
                // see the API demo for more info
                Authorization: 'bearer '+config.access_token
            }
        });
    }
});

var Collection = Backbone.Collection.extend({
    model: Model,
    url: config.api_url,
    parse: function(data) {
        // what do we get from the API?
        console.log('All data', data);
        console.log('Specified data; objects from data', data.objects);   
        return data.objects;
    }
});

var myView = new View();