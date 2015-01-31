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
	["portland"], 
	"There are a lot of bridges.")
seattle = new city(
	"Seattle, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seattle_zps1nvuscxp.jpg', 
	["seattle"], 
	"You are there right now.")
newhaven = new city(
	"New Haven, CT", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/new_haven_zpsliqaxxls.jpg', 
	["new haven"], 
	"You won't get this one.")
tijuana = new city(
	"Tijuana, Mexico", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/tijuana_zpsgltcgq5a.jpg',
	["tijuana"], 
	"There are a lot more cars going north than south.")
giza = new city(
	"Giza, Egypt", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/giza_zpsz4k6vxhu.jpg', 
	["giza"], 
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


var cityList = [portland, seattle, newhaven, tijuana, giza, boston, santiago]

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

	this.check = function(obj, list) {
	    var i;
	    for (i = 0; i < list.length; i++) {
	        if (list[i] === obj) {
	            return true;
	        }
	    }

    	return false;
	}
	// this.check = function(text) {
	// 	var answer = text.toLowerCase()
	// 	if (answer in self.cities[self.cityTracker].answers) {
	// 		return true
	// 	} else {
	// 		return false
	// 	}
	// }

	this.getInput = function(input) {
		if (input == "") {
			return
		} else {
			if (self.check(input, self.cities[self.cityTracker].answers) == true) {
				self.correct("You are correct! The place was "+self.cities[self.cityTracker].name+".")
			} else {
				self.incorrect("Not quite right. The corect answer was "+self.cities[self.cityTracker].name+".")
			}
			self.nextCity()
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

game = new game(cityList)

$(document).ready(function() {

	game.nextCity()

	$("#getHint").click(function() {
		game.getHint()
	})

	$("#guess").keyup(function(e) {
		if(e.which == 13) {
			var input = $("#guess").val()
			game.getInput(input)
			$("#guess").val("")
		}
	})
})