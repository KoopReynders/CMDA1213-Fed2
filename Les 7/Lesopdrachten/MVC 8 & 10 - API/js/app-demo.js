var config = {
    tournamentID: 18590,
    access_token: 'e08a55d872',
    api_url: 'https://api.leaguevine.com/v1/tournaments/',
    season_id: '20157'
}

// We can use an empty model here. We won't be manipulating any data
var Model = Backbone.Model.extend({});

// Note: this view does NOT render anything actually
var View = Backbone.View.extend({
    initialize: function() {
        var self = this;
        this.collection = new Collection();
        // when you fetch:
        // Backbone fetch => Collection parse => success callback
        this.collection.fetch({
            success: function(data) {
                //console.log(self.collection.toJSON());
                _.each(self.collection.models, function(model){
                    // set a resource uri on the model
                    //console.log("model data: ", model.toJSON());
                    //console.log("model: ", model);
                    model.url = model.get('resource_uri');
                    //console.log(model.url);
                });
                self.addTournament();
            }
        });
    },
    addTournament: function() {
        var tournament = {
            name: 'Demo tournament with API for group 2!',
            start_date: '2013-05-10',
            end_date: '2013-05-15',
            season_id: config.season_id
        }
        
        // create a new model by passing properties into the Model() constructor
        var newModel = new Model(tournament);
        // if we want to POST a new tournament model, we need the api_url
        // see: https://www.leaguevine.com/docs/api/
        newModel.url = config.api_url;
        
        // save(data, options)
        console.log('new model to json: ', newModel.toJSON());
        newModel.save(newModel.toJSON(), {
            success: function(data) {
                // when this model is saved, we want to be able to update it
                // when a model is saved, it gets properties that are returned by the API!
                // we can log the data that is in the model => console.log(newModel.toJSON);
               
                //console.log('model after saving: ', newModel.toJSON()); 
                
                //var league_id = newModel.get('season').league_id;
                //console.log('league id', league_id);
                newModel.url = newModel.get('resource_uri');
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
        // we could log data, right? Let's!
        console.log("data to parse: ", data);
        
        return data.objects;
    }
});

// start the App plz
var myView = new View();