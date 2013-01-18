// Define config settings
var config = {
    tournamentID: 18590,
    access_token: '109f8a19ae',
    api_url: 'https://api.leaguevine.com/v1/tournaments/',
    season_id: '20126'
}

// Define model
var aModel = Backbone.Model.extend({});

// Define collection
var aCollection = Backbone.Collection.extend({
    // Set the model for a collection
    model: aModel,

    // Set the url for the collection
    url: config.api_url,

    // Parse the relevant data from the data object
    parse: function(data) {
        return data.objects;
    }
});

// Define view
var aView = Backbone.View.extend({
    // Initialize is called when the view is instantiated
    initialize: function() {
        // Capture the scope of this object (aView) in a local variable 
        var self = this;

        // Instantiate a new collection
        this.collection = new aCollection();

        // Fetch data from the API, this is a "GET" request
        this.collection.fetch({
            // If the request succeeds, the success callback function is executed 
            success: function(data) {
                // Loop through the fetched models 
                _.each(self.collection.models, function(model){
                    // Set the url for each model
                    model.url = model.get('resource_uri');
                });
                // Call the addTournament method
                self.addTournament();
            }
        });
    },
    
    // Add a tournament
    addTournament: function() {
        // New tournament data
        var tournament = {
            name: 'Dodge it to the max',
            start_date: '2013-05-10',
            end_date: '2013-05-15',
            season_id: config.season_id
        }
        
        // Instantiate a new model and stored it in the variable "newModel"
        // Pass the data to the new model as a parameter
        var newModel = new aModel(tournament);

        // Set the API url
        newModel.url = config.api_url;
        
        // Save a new model to the API, this is a "POST" request
        // the save function takes two parameters,
        
        newModel.save(
            // The first parameter is the data object
            newModel.toJSON(), {
            // The second parameter takes request options
            success: function(data) {
                // On succes set the new url for the model
                newModel.url = newModel.get('resource_uri');
            },
            error: function(data) {
                // On error log the error in the console
                console.log('error');
            },
            // Define an authorization header to allow for posting to the API
            headers: {
                Authorization: 'bearer '+config.access_token
            }
        });
    }
});

// Kickstart the application by instantiating "aView"
var myView = new aView();