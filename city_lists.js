// Making the list of pictures to guess. To add a new entry you need the following
// name: How the name will appear to the player when they get it right or wrong.
// source: This is a link to the actual photo. I currently am using photobucket.com to store and link photos.
// answer: This is a list not a string and it contians all the strings acceptable as asnwers. All strings should be in lowercase.
// hint: This is a list and it contians the hints the user will see. Currently all maps have two hints but any number works.

//
// The cities section needs work so feel free to change hints, add answers, get better pictures and fix spelling errors. Just be careful
// if you change the name in white becasue then you will need to change it later when it appears in a list as well.
//


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
	["It's on the West coast.", "It's in Oregon."])
seattle = new city(
	"Seattle, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seattle_zps1nvuscxp.jpg', 
	["seattle", "seattle, wa"], 
	["It's on the West coast.", "It's in Washington."])
newhaven = new city(
	"New Haven, CT", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/new_haven_zpsliqaxxls.jpg', 
	["new haven", "new haven, ct"], 
	["This is the home of Yale.", "It's in Connecticut."])
tijuana = new city(
	"Tijuana, Mexico", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/tijuana_zpsldesdywa.jpg',
	["tijuana", "tijuana, mexico"], 
	["There are two countries in this picture.", "It's on the U.S. border."])
giza = new city(
	"Giza, Egypt", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/giza_zpsz4k6vxhu.jpg', 
	["giza", "giza, egypt", "cairo", "cairo, egypt"], 
	["Those buildings in the dessert are over three thousand years old.", "It's in Egypt."])
boston = new city(
	"Boston, MA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/boston_zpstqmrnfjg.jpg', 
	["boston", "boston, ma"], 
	["It's on the East coast.","It's in Massachusetts."])
santiago = new city(
	"Santiago de Compostela, Spain", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/santiago_de_compostela_zps0qnprrrm.jpg', 
	["santiago de compostela","santiago", "santiago de compostela, spain", "santiago, spain"], 
	["A famous pilgrimage ends here.", "It's in Spain."])
paris = new city(
	"Paris, France", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/paris_zpslhqb9bxq.jpg', 
	["paris","paris, france"], 
	["It's in Europe", "It's in France."])
volunteer = new city(
	"Volunteer park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/volunteerpark_zps281jm9ih.jpg', 
	["volunteer","volunteer park"], 
	["It's in Seattle.", "That is not a baseball diamond, its an empty reservoir."])
versailles = new city(
	"Versailles, France", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/versailles_zps3fmtmdsb.jpg', 
	["versailles","versailles, france"], 
	["It's in Europe.", "It's in France."])
seward = new city(
	"Seward park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seward_zpshuzwy7hh.jpg', 
	["seward","seward park"], 
	["It's in Seattle.", "It is in South Seattle."])
ravenna = new city(
	"Ravenna park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/revenna_zpsii8dqjwq.jpg', 
	["ravenna","ravenna park"], 
	["It's in Seattle.", "It is in Northeast Seattle."])
seoul = new city(
	"Seoul, Korea", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/seoul_zpsnx06etsp.jpg', 
	["seoul","seoul, korea"], 
	["It's in Southeast Asia.", "It's in Korea."])
lasvegas = new city(
	"Las Vegas, NV", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/lasvagas_zpswl0mym9z.jpg', 
	["las vegas","las vegas, nv", "vegas"], 
	["It's in the Southwest.", "It's in Nevada."])
presido = new city(
	"Presido park, San Fransisco", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/presido_zpswqz7toud.jpg', 
	["presido","presido park"], 
	["It's in San Fransico.", "That is the Golden Gate bridge."])
sanfransisco = new city(
	"San Fransisco, CA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/sanfran_zpsqulismb8.jpg', 
	["san fransisco","san fransisco, ca", "san fran"], 
	["It's on the West coast.", "It's in California."])
mttabor = new city(
	"Mt. Tabor, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mttabor_zpsvyualnvq.jpg', 
	["mt tabor","mt. tabor", "mt tabor park", "mt. tabor park"], 
	["It's in Portland.", "It was a volcano."])
centralpark = new city(
	"Central park, New York", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/centralpark_zps7axrraos.jpg', 
	["central","central park"], 
	["The most famous park in the United States.", "One of those buildings is a famous art museum."])
goldengate = new city(
	"Golden Gate park, San Fransisco", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/godlengatepark_zpsuqdqpu9n.jpg', 
	["golden gate","golden gate park"], 
	["It's in San Fransisco.", "It's named after a nearby bridge."])
forestpark = new city(
	"Forest park, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/forestpark_zpspugf1lrc.jpg', 
	["forset park","forest"], 
	["It's in Portland.", "It's chock full of trees. One might even say it a..."])
laurelhurst = new city(
	"Laurelhurst park, Portland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/larualhurst_zpswtivyjgt.jpg', 
	["laurelhurst","laurelhurst park"], 
	["It's in Portland.", "It has a duck pond in the center."])
discovery = new city(
	"Discovery park, Seattle", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/discoverypark_zpsxpmvhnpu.jpg', 
	["discovery","discovery park"], 
	["It's in Seattle.", "It's the largest park in Seattle."])
buenosaires = new city(
	"Buenos Aires, Argentina", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/buenosaires_zpse1blgpjz.jpg', 
	["buenos aires"], 
	["It's a capitol city in South America.", "It's in Argentina."])
vancouver = new city(
	"Vancouver, BC", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/vancouver_zpsixsehcqj.jpg', 
	["vancouver", "vancouver, bc"], 
	["It's in Canada.", "It's on the West coast."])
mexicocity = new city(
	"Mexico City, Mexico", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mexicocity_zpsweksg6rz.jpg', 
	["mexico city"], 
	["It's in North America", "It's named after the country it's in."])
hongkong = new city(
	"Hong Kong", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/hongkong_zpsuxibov6t.jpg', 
	["hong kong"], 
	["It's in Southeast Asia", "It used to be a colony of Britian."])
capeofgoodhope = new city(
	"Cape of Good Hope, South Africa", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/capeofgoodhope_zpsefkuwhcc.jpg', 
	["cape of good hope"], 
	["It's in Africa.", "It's the southernmost point in Africa."])
dc = new city(
	"D.C, Maryland", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/dc_zpsn6f3assp.jpg', 
	["dc", "d.c."], 
	["It's a capitol city.", "It's the capitol city."])
newyork = new city(
	"New York, NY", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/newyork_zpspdhnb77w.jpg', 
	["new york"], 
	["There are two states in this picture.", "It's the largest city in the United states."])
losangels = new city(
	"Los Angels, CA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/losangles_zpsk65xmzzw.jpg', 
	["los angels"], 
	["It's on the West coast", "It's in California."])
chicago = new city(
	"Chicago, IL", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/chicago_zpsbobov4sy.jpg', 
	["chicago"], 
	["It's not on a coast.", "It's in the Midwest."])
sthelens = new city(
	"Mt. St. Helens, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/sthelens_zpscbrczuak.jpg', 
	["st. helens", "mt st helens", "helens", "mt. helens", "mt. st. helens", "st. helens"], 
	["It's in the Cascades.", "It blew in 1980."])
mtrainier = new city(
	"Mt. Rainier, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mtrainer_zpsaqbeirzs.jpg', 
	["rainier", "mt rainer", "mt. rainier", "mount rainier"], 
	["It's in the Cascades.", "It's the tallest mountain in the Cascades."])
oldfaithful = new city(
	"Old Faithful, Yellowstone National Park", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/oldfaithful_zpsyibzafmk.jpg', 
	["old faithful"], 
	["It's in a famous national park.", "It's in Yellowstone."])
mthood = new city(
	"Mt. Hood, OR", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mthood_zpsubzzfaht.jpg', 
	["hood", "mt hood", "mt. hood", "mount hood"], 
	["It's in the Cascades.", "It's not in Washington."])
mtadams = new city(
	"Mt. Adams, WA", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mtadams_zpsnkn0iyy6.jpg', 
	["mt adams", "adams", "mt. adams", "mount adams"], 
	["It's in the Cascades.", "It's 12,281 feet tall."])
mississippiriver = new city(
	"Mississippi River, Louisiana", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mississippiriver_zpsrap4ety7.jpg', 
	["mississippi", "mississippi river"], 
	["It flows into the Gulf.", "It's the largest river in the United States."])
mtmckinley = new city(
	"Mt. McKinley, AK", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/mckinley_zpsrmcuobd7.jpg', 
	["mckinley", "mt mckinley", "mt. mckinley", "mount mckinley"], 
	["It's in Alaska.", "It's the tallest mountain in the United States."])
craterlake = new city(
	"Crater Lake, OR", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/craterlake_zpsg7ae9cqs.jpg', 
	["crater lake"], 
	["There are no rivers flowing into or out of this lake.", "It's in Oregon."])
grandcanyon = new city(
	"the Grand Canyon", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/grandcanyon_zpsuh8u34yt.jpg', 
	["grand canyon", "the grand canyon"], 
	["It's in Arizona.", "You can see the Colarado river winding through it."])
lakesuperior = new city(
	"Lake Superior", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/lakesuperior_zpsoyykrnrb.jpg', 
	["superior", "lake superior"], 
	["There are two countries in this picture.", "This is the largest great lake."])
columbiagorge = new city(
	"the Columbia River Gorge", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/columbiagoerge_zpsga0ee15m.jpg', 
	["columbia", "gorge", "columbia gorge", "columbia river gorge"], 
	["There are two states in this picture.", "It's in the Cascades."])
fingerlakes = new city(
	"the Finger lakes, NY", 
	'http://i166.photobucket.com/albums/u116/lucasvanmeter/fingerlakes_zpswn8wnaee.jpg', 
	["fingers", "finger lakes"], 
	["It's in New York.", "It looks like someone scratched the land with their hand."])

// Here we put the maps into various categories.
var natureMode = {
	name: "nature",
	list: [lakesuperior, mtrainier, grandcanyon, sthelens, mtadams, craterlake, mtmckinley, mississippiriver, mthood, fingerlakes, oldfaithful]
}
var usMode = {
	name: "us",
	list: [newyork, seattle, chicago, sanfransisco, dc, portland, boston, losangels, newhaven, tijuana, lasvegas]
}
var worldMode = {
	name: "world",
	list: [giza, paris, vancouver, mexicocity, hongkong, buenosaires, versailles, tijuana, capeofgoodhope, santiago, seoul]
}
var parksMode = {
	name: "parks", 
	list: [discovery, goldengate, centralpark, ravenna, mttabor, seward, laurelhurst, presido, forestpark, volunteer]
}


// Here we compile all the modes into one dictionary for the game to accept as input.
// This is a bit too hands on and I should make it automated but the buttons for each category are currently made by hand,
// to make a new mode you have to add button in the html file and then make it work in the js file.
var content = {
	"nature" : natureMode,
	"us" : usMode,
	"world" : worldMode,
	"parks" : parksMode
}