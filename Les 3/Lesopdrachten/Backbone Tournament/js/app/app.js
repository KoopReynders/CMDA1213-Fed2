$(function() {
 	//Tournament data
    var tournament = { 
		name: "Threesome Ultimate Tournament",
		scheduling_format:'regular', 
		info: "Threesome Ultimate Tournament is a Mini Ultimate tournament played in Amsterdam. Games are played 3 on 3. Your team can contain a maximum of 4 players."
	}

    //create instance of tournamentView
	var tournamentModel = new TournamentModel(tournament);
	var tournamentView = new TournamentView({model: tournamentModel});
	tournamentView.render();
})

    

