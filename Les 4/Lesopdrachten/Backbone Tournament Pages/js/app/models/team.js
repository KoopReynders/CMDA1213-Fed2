// Define game model
FED2.Team = Backbone.Model.extend({
	// Initialize model
	initialize: function () {
		// Calculate
		var won = this.get("Pw");
		var lost = this.get("Pl");
		
		var saldo = won - lost;
		this.set("saldo", saldo)
	}
});