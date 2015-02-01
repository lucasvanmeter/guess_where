//Game object will run everything.

function game(lists) {
	var self = this
	this.lists = lists
	this.cities = this.lists[0]
	this.score = 0
	this.cityTracker = self.cities.length

	this.newGame = function(num) {
		self.cities = self.lists[num]
		self.cityTracker = self.cities.length
		self.nextCity()
	}

	this.updatePic = function(pic) {
		$('#pic').attr('src',pic)
	}

	this.updateHint = function(text) {
		$("#hint").html(text)
	}

	this.nextCity = function() {
		self.cityTracker++
		if (self.cityTracker >= self.cities.length) {
			self.cityTracker = 0
		}
		self.updatePic(self.cities[self.cityTracker].source)
		$("#hint").hide()
		self.updateHint(self.cities[self.cityTracker].hint)
	}

	this.check = function(guess, list) {
	    var i;
	    var obj = guess.toLowerCase()
	    for (i = 0; i < list.length; i++) {
	        if (list[i] === obj) {
	            return true;
	        }
	    }
    	return false;
	}

	//I would like to delay the update of the new city so they get a chance
	// to look at it before moving on. Right now there is a button to get to next map.
	this.getInput = function(input) {
		if (input == "") {
			return
		} else {
			if (self.check(input, self.cities[self.cityTracker].answers) == true) {
				self.correct("You are correct! The place was "+self.cities[self.cityTracker].name+".")
				self.score++
			} else {
				self.incorrect("Not quite right. The correct answer was "+self.cities[self.cityTracker].name+".")
			}
		}
		
	}

	//hints

	this.getHint = function() {
		$("#hint").show()
	}

	//Alerts

	var alertNum = 0

	this.addAlert =  function(text,type) {
		$("#message").append(
			'<div class="alert alert-'+type+' role="alert" id='+alertNum+'>'+text+'</div>'
		)
		return alertNum++
	}

	this.removeAlert = function(num) {
	$("#"+num).fadeOut("slow", function(){this.remove()})
	}

	this.correct = function(text) {
		var i = self.addAlert(text, "success")
		setTimeout(function(){self.removeAlert(i)}, 3000)
	}

	this.incorrect = function(text) {
		var i = self.addAlert(text, "warning")
		setTimeout(function(){self.removeAlert(i)}, 3000)
	}
}

//The buttons in the game

game = new game(games)

$(document).ready(function() {

	game.nextCity()

	$("#getHint").click(function() {
		game.getHint()
	})

	$("#next").click(function() {
		game.nextCity()
	})

	$("#guess").keyup(function(e) {
		if(e.which == 13) {
			var input = $("#guess").val()
			game.getInput(input)
			$("#guess").val("")
		}
	})

	$("#all").click(function() {
		game.newGame(0)
	})

	$("#us").click(function() {
		game.newGame(1)
	})

	$("#world").click(function() {
		game.newGame(2)
	})

	$("#parks").click(function() {
		game.newGame(3)
	})
})