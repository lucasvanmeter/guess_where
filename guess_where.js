//The controller object will run everything.

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

	//Alerts: Windows that pop up and then vanish after some seconds. The three
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

	// updates the score on screen.
	this.updateScore = function() {
		$("#score").html(""+self.score)
		$(".circle-text").css("width",(25+2*self.score)+"px")
		$(".circle-text").css("height",(25+2*self.score)+"px")
	}

	//New game will initialize a new setup.

	this.newGame = function(mode) {
		self.mode = self.maps[mode]
		self.list = self.mode["list"]
		self.cityTracker = 0
		self.currentCity = self.list[0]
		self.hintTracker = 0
		self.score = 0
		self.updateScore()
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
				self.updateScore()
			} else {
				self.getHint()	
			} 
		}
	}

	//hints
	this.getHint = function() {
		if (self.hintTracker < self.currentCity.hint.length) {
			self.hint(self.currentCity.hint[self.hintTracker])	
			self.hintTracker++
			if (self.hintTracker == self.currentCity.hint.length) {
				$("#getHint").html("Answer")
				$("#getHint").attr("class","btn btn-warning")
			}
		} else {
			self.incorrect("The place was "+self.currentCity.name+".")
			setTimeout(self.nextCity, 3000)
		}
	}
}

//The buttons in the game, should make this more automated.

$(document).ready(function() {

	//We define the controller and call it game.
	game = new controller(content)

	//The initial mode is U.S.
	game.newGame("us")

	//We make all the buttons do the things they do.
	$("#getHint").click(function() {
		game.getHint()
	})

	$("#last").click(function() {
		game.lastCity()
	})

	$("#next").click(function() {
		game.nextCity()
	})

	// The left and right arrow keys will also nevaigate the pictures.
	$(document).keyup(function(e) {
        if ( e.keyCode == 37 ) // left arrow key
            game.lastCity()
    })

    $(document).keyup(function(e) {
        if ( e.keyCode == 39 ) // right arrow key
            game.nextCity()
    })

    //Enter a guess
	$("#guess").keyup(function(e) {
		if(e.which == 13) {		//enter
			var input = $("#guess").val()
			game.getInput(input)
			$("#guess").val("")
		}
	})

	//??? what does this js do?

	var map = {68: false, 69: false, 86: false};
	$(document).keydown(function(e) {
	    if (e.keyCode in map) {
	        map[e.keyCode] = true;
	        if (map[68] && map[69] && map[86]) {
	            game.score++
				game.updateScore()
	        }
	    }
	}).keyup(function(e) {
	    if (e.keyCode in map) {
	        map[e.keyCode] = false;
	    }
	});


	//Here we make the menu buttons select the right mode. If you add more modes in the city list thing you have to 
	// change this as well.
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