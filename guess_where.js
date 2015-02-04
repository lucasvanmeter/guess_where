//Game object will run everything.

function controller(maps) {
	this.maps = maps
	this.mode = null
	this.list = null
	this.score = 0
	this.cityTracker = 0
	this.hintTracker = 0
	this.currentCity = null
	var self = this

	//We have a number of utility functions to control the display.

	//Alerts: Windows that pop up and then vanish after 4 seconds. The three
	// flavours are correct, incorrect, and hint.

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
		setTimeout(function(){self.removeAlert(i)}, 4000)
	}

	this.incorrect = function(text) {
		var i = self.addAlert(text, "warning")
		setTimeout(function(){self.removeAlert(i)}, 4000)
	}

	this.hint = function(text) {
		var i = self.addAlert(text, "info")
		setTimeout(function(){self.removeAlert(i)}, 4000)
	}

	//This method updates the picture.

	this.updatePic = function(pic) {
		$('#pic').attr('src',pic)
	}

	//New game will initialize a new setup.

	this.newGame = function(mode) {
		self.mode = self.maps[mode]
		self.list = self.mode["list"]
		self.cityTracker = 0
		self.currentCity = self.list[0]
		self.hintTracker = 0
		self.score = 0
		$("#score").html(""+self.score)
		$(".circle-text").css("width",(25+2*self.score)+"px")
		$(".circle-text").css("height",(25+2*self.score)+"px")
		self.updatePic(self.currentCity.source)
	}

	//This is how we get to the next city.

	this.updateCity = function() {
		self.currentCity = self.list[self.cityTracker]
		self.updatePic(self.currentCity.source)
		self.hintTracker = 0
		$("#getHint").html("Hint")
		$("#getHint").attr("class","btn btn-info")
	}

	this.nextCity = function() {
		self.cityTracker++
		if (self.cityTracker >= self.list.length) {
			self.cityTracker = 0
		}
		self.updateCity()
	}

	this.lastCity = function() {
		self.cityTracker--
		if (self.cityTracker < 0) {
			self.cityTracker = self.list.length - 1
		}
		self.updateCity()
	}

	// This code will check to see if the words the player entered match
	// any of the possible answers.

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

	// This recives the input from the player and decides what to do.

	this.getInput = function(input) {
		if (input == "") {
			return
		} else {
			if (self.check(input, self.currentCity.answers) == true) {
				self.correct("You are correct! The place was "+self.currentCity.name+".")
				setTimeout(self.nextCity, 1000)
				self.score++
				$("#score").html(""+self.score)
				$(".circle-text").css("width",(25+2*self.score)+"px")
				$(".circle-text").css("height",(25+2*self.score)+"px")
			} else {
				self.getHint()	
			} 
		}
	}

	//hints
	this.getHint = function() {
		if (self.hintTracker < 2) {
			self.hint(self.currentCity.hint[self.hintTracker])	
			self.hintTracker++
			if (self.hintTracker == 2) {
				$("#getHint").html("Answer")
				$("#getHint").attr("class","btn btn-warning")
			}
		} else {
			self.incorrect("The place was "+self.currentCity.name+".")
			setTimeout(self.nextCity, 3000)
		}
	}
}

//The buttons in the game



$(document).ready(function() {

	game = new controller(content)

	game.newGame("us")

	$("#getHint").click(function() {
		game.getHint()
	})

	$("#last").click(function() {
		game.lastCity()
	})

	$(document).keyup(function(e) {
        if ( e.keyCode == 37 ) // w
            game.lastCity()
    })

	$("#next").click(function() {
		game.nextCity()
	})

	$(document).keyup(function(e) {
        if ( e.keyCode == 39 ) // w
            game.nextCity()
    })

	$("#guess").keyup(function(e) {
		if(e.which == 13) {		//enter
			var input = $("#guess").val()
			game.getInput(input)
			$("#guess").val("")
		}
	})

	$("#nature").click(function() {
		game.newGame("nature")
		$("#mode").html("Nature <span class='caret'></span>")
	})

	$("#us").click(function() {
		game.newGame("us")
		$("#mode").html("U.S. <span class='caret'></span>")
	})

	$("#world").click(function() {
		game.newGame("world")
		$("#mode").html("World <span class='caret'></span>")
	})

	$("#parks").click(function() {
		game.newGame("parks")
		$("#mode").html("Parks <span class='caret'></span>")
	})
})