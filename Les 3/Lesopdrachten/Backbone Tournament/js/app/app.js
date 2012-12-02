$(function() {
 	//Tournament data
    var tournament = { 
		name: "Threesomes", 
		info: "Lorem ipsum dolor sit amet" 
	}

    //create instance of tournamentView
	var tournamentModel = new TournamentModel(tournament);
	var tournamentView = new TournamentView({model: tournamentModel});
	tournamentView.render();
})

    

