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
	["It's on the West coast."])
seattle = new city(
	"Seattle, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seattle_zps1nvuscxp.jpg', 
	["seattle", "seattle, wa"], 
	["It's on the West coast."])
newhaven = new city(
	"New Haven, CT", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/new_haven_zpsliqaxxls.jpg', 
	["new haven", "new haven, ct"], 
	["This is the home of Yale."])
tijuana = new city(
	"Tijuana, Mexico", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/tijuana_zpsldesdywa.jpg',
	["tijuana", "tijuana, mexico"], 
	["There are two countries in this picture."])
giza = new city(
	"Giza, Egypt", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/giza_zpsz4k6vxhu.jpg', 
	["giza", "giza, egypt", "cairo", "cairo, egypt"], 
	["Those buildings in the dessert are over three thousand years old."])
boston = new city(
	"Boston, MA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/boston_zpstqmrnfjg.jpg', 
	["boston", "boston, ma"], 
	["It's on the East coast."])
santiago = new city(
	"Santiago de Compostela, Spain", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/santiago_de_compostela_zps0qnprrrm.jpg', 
	["santiago de compostela","santiago", "santiago de compostela, spain", "santiago, spain"], 
	["A famous pilgrimage ends here."])
paris = new city(
	"Paris, France", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/paris_zpslhqb9bxq.jpg', 
	["paris","paris, france"], 
	["It's in Europe"])
volunteer = new city(
	"Volunteer park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/volunteerpark_zps281jm9ih.jpg', 
	["volunteer","volunteer park"], 
	["It's in Seattle."])
versailles = new city(
	"Versailles, France", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/versailles_zps3fmtmdsb.jpg', 
	["versailles","versailles, france"], 
	["It's in Europe."])
seward = new city(
	"Seward park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seward_zpshuzwy7hh.jpg', 
	["seward","seward park"], 
	["It's in Seattle."])
ravenna = new city(
	"Revenna park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/revenna_zpsii8dqjwq.jpg', 
	["ravenna","ravenna park"], 
	["It's in Seattle."])
seoul = new city(
	"Seoul, Korea", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seoul_zpsnx06etsp.jpg', 
	["seoul","seoul, korea"], 
	["It's in Southeast Asia."])
lasvegas = new city(
	"Las Vagas, NV", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/lasvagas_zpswl0mym9z.jpg', 
	["las vegas","las vegas, nv"], 
	["It's in the Southwest."])
presido = new city(
	"Presido park, San Fransisco", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/presido_zpswqz7toud.jpg', 
	["presido","presido park"], 
	["It's in San Fransico."])
sanfransisco = new city(
	"San Fransisco, CA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/sanfran_zpsqulismb8.jpg', 
	["san fransisco","san fransisco, ca", "san fran"], 
	["It's on the West coast."])
mttabor = new city(
	"Mt. Tabor, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mttabor_zpsvyualnvq.jpg', 
	["mt tabor","mt. tabor", "mt tabor park", "mt. tabor park"], 
	["It's in Portland."])
centralpark = new city(
	"Central park, New York", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/centralpark_zps7axrraos.jpg', 
	["central","central park"], 
	["The most famous park in the United States."])
goldengate = new city(
	"Golden Gate park, San Fransisco", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/godlengatepark_zpsuqdqpu9n.jpg', 
	["golden gate","golden gate park"], 
	["It's in San Fransisco."])
forestpark = new city(
	"Forest park, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/forestpark_zpspugf1lrc.jpg', 
	["forset park","forest"], 
	["It's in Portland."])
laurelhurst = new city(
	"Laurelhurst park, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/larualhurst_zpswtivyjgt.jpg', 
	["laurelhurst","laurelhurst park"], 
	["It's in Portland."])
discovery = new city(
	"Discovery park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/discoverypark_zpsxpmvhnpu.jpg', 
	["discovery","discovery park"], 
	["It's in Seattle."])
buenosaires = new city(
	"Buenos Aires, Argentina", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/buenosaires_zpse1blgpjz.jpg', 
	["buenos aires"], 
	["It's a capitol city in South America."])

//The lists need to be numbered to be called.
var allList = [seattle, sanfransisco, portland, buenosaires, boston, giza, versailles, 
				newhaven, tijuana, paris, santiago, lasvegas, seoul]
var usList = [seattle, sanfransisco, portland, boston, newhaven, tijuana, lasvegas]
var worldList = [giza, versailles, santiago, paris, buenosaires, tijuana, seoul]
var parkList = [discovery, goldengate, centralpark, ravenna, mttabor, seward, laurelhurst, 
				presido, forestpark, volunteer]

//This is the argument for the game object.
var games = [allList, usList, worldList, parkList]

var content = {
	"all" : allList,
	"us" : usList,
	"world" : worldList,
	"parks" : parkList
}