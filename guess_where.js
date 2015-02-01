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
	"That's a big lake to the east and not even a lake on the west.")
newhaven = new city(
	"New Haven, CT", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/new_haven_zpsliqaxxls.jpg', 
	["new haven", "new haven, ct"], 
	"This one might be hard. Yale is in this city.")
tijuana = new city(
	"Tijuana, Mexico", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/tijuana_zpsldesdywa.jpg',
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
	"It's a famous city on the east coast.")
santiago = new city(
	"Santiago de Compostela, Spain", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/santiago_de_compostela_zps0qnprrrm.jpg', 
	["santiago de compostela","santiago", "santiago de compostela, spain", "santiago, spain"], 
	"A famous pilgrimage ends here.")
paris = new city(
	"Paris, France", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/paris_zpslhqb9bxq.jpg', 
	["paris","paris, france"], 
	"It's in Europe")
volunteer = new city(
	"Volunteer park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/volunteerpark_zps281jm9ih.jpg', 
	["volunteer","volunteer park"], 
	"It's in Seattle.")
versailles = new city(
	"Versailles, France", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/versailles_zps3fmtmdsb.jpg', 
	["versailles","versailles, france"], 
	"That is one big garden.")
seward = new city(
	"Seward park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seward_zpshuzwy7hh.jpg', 
	["seward","seward park"], 
	"It's in Seattle.")
revenna = new city(
	"Revenna park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/revenna_zpsii8dqjwq.jpg', 
	["revenna","revenna park"], 
	"It's in Seattle.")
seoul = new city(
	"Seoul, Korea", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seoul_zpsnx06etsp.jpg', 
	["seoul","seoul, korea"], 
	"It's a famous city in southeast asia.")
lasvagas = new city(
	"Las Vagas, NV", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/lasvagas_zpswl0mym9z.jpg', 
	["las vagas","las vagas, nv"], 
	"That strip down the middle is very built up but not much around it is.")
presido = new city(
	"Presido park, San Fransisco", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/presido_zpswqz7toud.jpg', 
	["presido","presido park"], 
	"It's in San Fransico.")
sanfransisco = new city(
	"San Fransisco, CA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/sanfran_zpsqulismb8.jpg', 
	["san fransisco","san fransisco, ca", "san fran"], 
	"Long brideges, very dense.")
mttabor = new city(
	"Mt. Tabor, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mttabor_zpsvyualnvq.jpg', 
	["mt tabor","mt. tabor", "mt tabor park", "mt. tabor park"], 
	"It's in Portland.")
centralpark = new city(
	"Central park, New York", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/centralpark_zps7axrraos.jpg', 
	["central","central park"], 
	"The most famous park in the United States.")
goldengate = new city(
	"Golden Gate park, San Fransisco", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/godlengatepark_zpsuqdqpu9n.jpg', 
	["golden gate","golden gate park"], 
	"It's in San Fransisco.")
forestpark = new city(
	"Forest park, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/forestpark_zpspugf1lrc.jpg', 
	["forset park","forest"], 
	"It's in Portland.")
laurelhurst = new city(
	"Laurelhurst park, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/larualhurst_zpswtivyjgt.jpg', 
	["laurelhurst","laurelhurst park"], 
	"It's in Portland.")
discovery = new city(
	"Discovery park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/discoverypark_zpsxpmvhnpu.jpg', 
	["discovery","discovery park"], 
	"It's in Seattle.")
buenosaires = new city(
	"Buenos Aires, Argentina", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/buenosaires_zpse1blgpjz.jpg', 
	["buenos aires"], 
	"A famous city in South America.")

var allList = [seattle, sanfransisco, portland, buenosaires, boston, giza, versailles, newhaven, tijuana, paris, santiago, lasvagas, seoul]
var usList = [seattle, sanfransisco, portland, boston, newhaven, tijuana, lasvagas]
var worldList = [giza, versailles, santiago, paris, buenosaires, tijuana, seoul]
var parkList = [discovery, goldengate, centralpark, revenna, mttabor, seward, laurelhurst, presido, volunteer]
var games = [allList, usList, worldList, parkList]

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