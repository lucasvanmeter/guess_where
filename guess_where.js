// Making the list of pictures to guess

function city(name, source, answers, hint) {
	this.name = name
	this.source = source
	this.answers = answers
	this.hint = hint
}

portland = new city(
	"Portland, OR", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/portland_zpsojxitoei.jpg', 
	["portland", "portland, or"], 
	"There are a lot of bridges.")
seattle = new city(
	"Seattle, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seattle_zps1nvuscxp.jpg', 
	["seattle", "seattle, wa"], 
	"You are there right now.")
newhaven = new city(
	"New Haven, CT", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/new_haven_zpsliqaxxls.jpg', 
	["new haven", "new haven, ct"], 
	"You won't get this one.")
tijuana = new city(
	"Tijuana, Mexico", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/tijuana_zpsgltcgq5a.jpg',
	["tijuana", "tijuana, mexico"], 
	"There are a lot more cars going north than south.")
giza = new city(
	"Giza, Egypt", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/giza_zpsz4k6vxhu.jpg', 
	["giza", "giza, egypt"], 
	"What are those strange buildings?")
boston = new city(
	"Boston, MA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/boston_zpstqmrnfjg.jpg', 
	["boston"], 
	"Famous city on the east coast.")
santiago = new city(
	"Santiago de Compostela, Spain", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/santiago_de_compostela_zps0qnprrrm.jpg', 
	["santiago de compostela","santiago"], 
	"You really won't get this one.")


var usaList = [portland, seattle, newhaven, tijuana, boston]
var worldList = [giza, santiago]

function game(cities) {
	var self = this
	this.cities = cities
	this.score = 0
	this.cityTracker = self.cities.length

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
	// to look at it before moving on.
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

game = new game(usaList)

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
})