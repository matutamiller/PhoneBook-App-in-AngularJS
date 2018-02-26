var app = angular.module ('phonebook', []);

app.controller('PhonebookController', ['$scope',
    'DataService', function(scope, dataService){
    scope.persons = dataService.list();
    scope.view = "list";
}]);

app.directive('pbPersonCard', function(){
    return {
        restrict: '',
        scope: {
            person: '='
        },
        templateUrl:'partials/person-card.html'
    };
});

app.service('DataService', [function(){
    function list(){
        return [
	    {
			"name":"Rasia Brant",
			"phone":"565-925-9999",
			"company":"Wintheiser-Haley",
			"photo":"https://robohash.org/laudantiummaioressapiente.bmp?size=50x50&set=set1"
		},
		{
			"name":"Hanni Cohrs",
			"phone":"751-194-3871",
			"company":"Marvin, Jakubowski and Muller",
			"photo":"https://robohash.org/quamquodanimi.bmp?size=50x50&set=set1"
		},
		{
			"name":"Melessa Hullin",
			"phone":"214-299-9140",
			"company":"Moen-Stamm",
			"photo":"https://robohash.org/possimusetnumquam.jpg?size=50x50&set=set1"},
		{
			"name":"Woodrow Astill",
			"phone":"319-430-5318",
			"company":"Hoeger, Farrell and Medhurst",
			"photo":"https://robohash.org/fugiataliquidneque.png?size=50x50&set=set1"},
		{
			"name":"Winonah Veljes",
			"phone":"986-986-8188",
			"company":"Moen, Yundt and Stanton",
			"photo":"https://robohash.org/possimusenimnon.png?size=50x50&set=set1"},
		{
			"name":"Shanie Parham",
			"phone":"131-933-3674",
			"company":"Jaskolski-D'Amore",
			"photo":"https://robohash.org/autetmagni.bmp?size=50x50&set=set1"},
		{
			"name":"Hailey Hylands",
			"phone":"630-317-3794",
			"company":"Lockman, Walsh and Hodkiewicz",
			"photo":"https://robohash.org/temporafacilisperferendis.jpg?size=50x50&set=set1"
		},
		{
			"name":"Sargent Janning",
			"phone":"162-924-4580",
			"company":"Dickens, Lubowitz and Bode",
			"photo":"https://robohash.org/laudantiumfugitcumque.bmp?size=50x50&set=set1"
		},
		{
			"name":"Heath Clemmow",
			"phone":"669-249-2671",
			"company":"Yundt, Herzog and Daugherty",
			"photo":"https://robohash.org/pariaturnobisquis.jpg?size=50x50&set=set1"
		},
		{
			"name":"Lizzie Frankum",
			"phone":"755-761-5400",
			"company":"Greenfelder-Runte",
			"photo":"https://robohash.org/maximeharumautem.bmp?size=50x50&set=set1"
		},
		{
			"name":"Timoteo Huburn",
			"phone":"615-207-1183",
			"company":"Goldner Inc",
			"photo":"https://robohash.org/cumveniamtenetur.jpg?size=50x50&set=set1"
		},
		{
			"name":"Nikkie Peach",
			"phone":"280-575-6431",
			"company":"Farrell, Rath and Bednar",
			"photo":"https://robohash.org/faceresediure.jpg?size=50x50&set=set1"
		},
		{
			"name":"Freddy Slainey",
			"phone":"875-842-3395",
			"company":"Buckridge, Hermann and Oberbrunner",
			"photo":"https://robohash.org/velitquisipsum.jpg?size=50x50&set=set1"
		},
		{
			"name":"Benjie Skidmore",
			"phone":"511-128-8953",
			"company":"Rempel and Sons",
			"photo":"https://robohash.org/veroomnisaliquid.jpg?size=50x50&set=set1"
		},
		{
			"name":"Lorrie Lafaye",
			"phone":"675-810-4371",
			"company":"Dietrich, Hickle and Stark",
			"photo":"https://robohash.org/quishicnon.png?size=50x50&set=set1"
		},
		{
			"name":"Gianna Durnill",
			"phone":"991-515-7560",
			"company":"Collier, Collier and Hermann",
			"photo":"https://robohash.org/etvelitnulla.jpg?size=50x50&set=set1"
		},
		{
			"name":"Kristal Gammet",
			"phone":"843-325-5520",
			"company":"Heathcote, Labadie and Marquardt",
			"photo":"https://robohash.org/autullamnon.bmp?size=50x50&set=set1"
		},
		{
			"name":"Esme Abbay",
			"phone":"787-640-1468",
			"company":"Langworth, Bernhard and Schmeler",
			"photo":"https://robohash.org/molestiasasperioresa.jpg?size=50x50&set=set1"
		},
		{
			"name":"Nerita Gilhespy",
			"phone":"850-941-1721",
			"company":"Gislason, Ruecker and Braun",
			"photo":"https://robohash.org/nullaculpaveritatis.bmp?size=50x50&set=set1"
		},
		{
			"name":"Verla Croall",
			"phone":"107-577-6479",
			"company":"Gibson-Nicolas",
			"photo":"https://robohash.org/inciduntvoluptatemeum.jpg?size=50x50&set=set1"
		},
		{
			"name":"Lynelle Jedrachowicz",
			"phone":"600-672-3616",
			"company":"Terry-Bernhard",
			"photo":"https://robohash.org/enimadipiscisit.png?size=50x50&set=set1"
		},
		{
			"name":"Leilah Dello",
			"phone":"884-863-0483",
			"company":"Stokes Inc",
			"photo":"https://robohash.org/illoexaspernatur.jpg?size=50x50&set=set1"
		},
		{
			"name":"Bili Vardon",
			"phone":"519-873-1854",
			"company":"Shanahan and Sons",
			"photo":"https://robohash.org/nesciuntasperioresut.jpg?size=50x50&set=set1"
		},
		{
			"name":"Sean Matyushonok",
			"phone":"156-869-0821",
			"company":"Rempel and Sons",
			"photo":"https://robohash.org/cumutquaerat.bmp?size=50x50&set=set1"
		},
		{
			"name":"Wilburt Blandford",
			"phone":"756-951-7832",
			"company":"Botsford LLC",
			"photo":"https://robohash.org/sapientererumconsequuntur.bmp?size=50x50&set=set1"
		},
		{
			"name":"Rusty Joslyn",
			"phone":"909-963-9153",
			"company":"Wyman LLC",
			"photo":"https://robohash.org/quiimpeditassumenda.jpg?size=50x50&set=set1"
		},
		{
			"name":"Vanny McTerry",
			"phone":"195-930-1538",
			"company":"Stracke, Abbott and Hermann",
			"photo":"https://robohash.org/etlaborumest.png?size=50x50&set=set1"
		},
		{
			"name":"Tracy Truesdale",
			"phone":"639-212-8553",
			"company":"Mayer-Schamberger",
			"photo":"https://robohash.org/eiusdolorqui.jpg?size=50x50&set=set1"
		},
		{
			"name":"Stafani Korb",
			"phone":"824-434-4989",
			"company":"Collier-Jones",
			"photo":"https://robohash.org/omnisvoluptasquia.bmp?size=50x50&set=set1"
		},
		{
			"name":"Marcelia Corss",
			"phone":"204-633-2535",
			"company":"Cummerata Inc",
			"photo":"https://robohash.org/consecteturestsed.jpg?size=50x50&set=set1"
		},
		{
			"name":"Durante Ginsie",
			"phone":"114-410-0385",
			"company":"Lemke Inc",
			"photo":"https://robohash.org/estinab.jpg?size=50x50&set=set1"
		},
		{
			"name":"Elga Metson",
			"phone":"328-768-5668",
			"company":"Bode Inc",
			"photo":"https://robohash.org/suscipitdeseruntvoluptas.bmp?size=50x50&set=set1"
		},
		{
			"name":"Trent Daout",
			"phone":"508-167-5682",
			"company":"Kassulke Inc",
			"photo":"https://robohash.org/estvelvoluptas.bmp?size=50x50&set=set1"
		},
		{
			"name":"Mickie Kivlin",
			"phone":"936-594-7496",
			"company":"Mayer-Conroy",
			"photo":"https://robohash.org/autvoluptasitaque.png?size=50x50&set=set1"
		},
		{
			"name":"Corene Cool",
			"phone":"565-511-0310",
			"company":"Rath, Nienow and Schimmel",
			"photo":"https://robohash.org/etconsequaturmolestias.jpg?size=50x50&set=set1"
		},
		{
			"name":"Meggie Handslip",
			"phone":"729-381-6797",
			"company":"Greenfelder, Buckridge and Grimes",
			"photo":"https://robohash.org/nametnatus.bmp?size=50x50&set=set1"
		},
		{
			"name":"Ware MacSkeagan",
			"phone":"706-890-1356",
			"company":"Ortiz Group",
			"photo":"https://robohash.org/impeditnonrem.png?size=50x50&set=set1"
		},
		{
			"name":"Erhart Stannering",
			"phone":"153-605-6821",
			"company":"Volkman-McClure",
			"photo":"https://robohash.org/rationeetaperiam.bmp?size=50x50&set=set1"
		},
		{
			"name":"Drew Espadero",
			"phone":"641-191-9273",
			"company":"Thiel-Kunde",
			"photo":"https://robohash.org/consequaturiurelabore.png?size=50x50&set=set1"
		},
		{
			"name":"Daffie Andrzej",
			"phone":"111-670-5675",
			"company":"Langworth LLC",
			"photo":"https://robohash.org/suscipitaliasvelit.jpg?size=50x50&set=set1"
		},
		{
			"name":"Bell Edgeon",
			"phone":"463-677-2231",
			"company":"Crist-Mayert",
			"photo":"https://robohash.org/molestiaeconsequaturquod.bmp?size=50x50&set=set1"
		},
		{
			"name":"Morgen Abeau",
			"phone":"972-164-7309",
			"company":"Hermiston-Lehner",
			"photo":"https://robohash.org/minusvelipsum.bmp?size=50x50&set=set1"
		},
		{
			"name":"Sidnee Rohlf",
			"phone":"146-355-2441",
			"company":"Brekke, Morissette and Nicolas",
			"photo":"https://robohash.org/exercitationemveldebitis.png?size=50x50&set=set1"
		},
		{
			"name":"Lance Tutin",
			"phone":"418-377-1943",
			"company":"Krajcik, Fay and Yost",
			"photo":"https://robohash.org/autdebitiserror.bmp?size=50x50&set=set1"
		},
		{
			"name":"Loralyn Crambie",
			"phone":"607-891-6647",
			"company":"Nikolaus-Bailey",
			"photo":"https://robohash.org/sintsolutadolorum.png?size=50x50&set=set1"
		},
		{
			"name":"Yetta Leafe",
			"phone":"350-614-8895",
			"company":"Cremin-Haley",
			"photo":"https://robohash.org/modilaborumdistinctio.png?size=50x50&set=set1"
		},
		{
			"name":"Udall Croser",
			"phone":"712-856-3520",
			"company":"Schiller, Grimes and Skiles",
			"photo":"https://robohash.org/autvelitvero.bmp?size=50x50&set=set1"

		},
		{
			"name":"Viva Pinor",
			"phone":"293-761-1464",
			"company":"Reynolds-Botsford",
			"photo":"https://robohash.org/estvitaeneque.bmp?size=50x50&set=set1"

		},
		{
			"name":"May O'Lenechan",
			"phone":"383-632-8725",
			"company":"Lehner-Crooks",
			"photo":"https://robohash.org/magninatusvitae.png?size=50x50&set=set1"

		},
		{
			"name":"Dill MacNeil",
			"phone":"158-795-9559",
			"company":"Schroeder, White and Abernathy",
			"photo":"https://robohash.org/idmolestiaequi.bmp?size=50x50&set=set1"

		},
		{
			"name":"Baryram McGovern",
			"phone":"529-484-8783",
			"company":"Powlowski-Bergstrom",
			"photo":"https://robohash.org/liberoarchitectoiste.bmp?size=50x50&set=set1"
		},
		{
			"name":"Drud Grzeszczak",
			"phone":"590-536-0045",
			"company":"Cronin, Mayert and Gaylord",
			"photo":"https://robohash.org/quoistelaboriosam.jpg?size=50x50&set=set1"
		},
		{
			"name":"Maurise Goodsir",
			"phone":"920-723-9461",
			"company":"McGlynn LLC",
			"photo":"https://robohash.org/dictaomnisquis.bmp?size=50x50&set=set1"
		},
		{
			"name":"Erastus Ruffles",
			"phone":"278-779-0805",
			"company":"Terry-Gutmann",
			"photo":"https://robohash.org/aliasmagnamvoluptatem.jpg?size=50x50&set=set1"
		},
		{
			"name":"Stevie Castelletto",
			"phone":"302-374-1615",
			"company":"Smitham Group",
			"photo":"https://robohash.org/adtemporibusquia.jpg?size=50x50&set=set1"
		},
		{
			"name":"Dietrich Limbourne",
			"phone":"103-197-3243",
			"company":"O'Keefe Inc",
			"photo":"https://robohash.org/autemnihilsed.png?size=50x50&set=set1"
		},
		{
			"name":"Lamar Trainor",
			"phone":"841-760-7692",
			"company":"Daniel Inc",
			"photo":"https://robohash.org/pariaturfugiatexcepturi.jpg?size=50x50&set=set1"
		},
		{
			"name":"Odelinda Kingscote",
			"phone":"114-545-9906",
			"company":"Keeling Inc",
			"photo":"https://robohash.org/repellendusdoloresed.jpg?size=50x50&set=set1"
		},
		{
			"name":"Johnnie Pawling",
			"phone":"455-826-8568",
			"company":"Glover LLC",
			"photo":"https://robohash.org/voluptatibusdebitisiure.bmp?size=50x50&set=set1"
		},
		{
			"name":"Reagen Haffner",
			"phone":"103-569-6108",
			"company":"Glover Group",
			"photo":"https://robohash.org/culpaitaquemodi.bmp?size=50x50&set=set1"
		},
		{
			"name":"Cilka Grellis",
			"phone":"582-121-6796",
			"company":"Pacocha LLC",
			"photo":"https://robohash.org/namrationeesse.png?size=50x50&set=set1"
		},
		{
			"name":"Randene Crank",
			"phone":"907-805-7404",
			"company":"Schulist, Adams and Hettinger",
			"photo":"https://robohash.org/assumendaquosaut.png?size=50x50&set=set1"
		},
		{
			"name":"Irita Joysey",
			"phone":"206-379-9738",
			"company":"Wilderman, Cronin and Hackett",
			"photo":"https://robohash.org/eossintqui.jpg?size=50x50&set=set1"
		},
		{
			"name":"Alexandre Hasker",
			"phone":"765-296-4316",
			"company":"Borer, Schulist and Bins",
			"photo":"https://robohash.org/porroquisquamfacere.png?size=50x50&set=set1"
		},
		{
			"name":"Walton Rehorek",
			"phone":"355-398-9696",
			"company":"Glover-McClure",
			"photo":"https://robohash.org/etaperiamanimi.jpg?size=50x50&set=set1"
		},
		{
			"name":"Ignaz Djakovic",
			"phone":"987-332-1671",
			"company":"Lowe Inc",
			"photo":"https://robohash.org/earationecumque.jpg?size=50x50&set=set1"
		},
		{
			"name":"Bo Code",
			"phone":"503-805-9317",
			"company":"Collier, O'Hara and Johnson",
			"photo":"https://robohash.org/nisidoloreset.png?size=50x50&set=set1"
		},
		{
			"name":"Shawn Kubyszek",
			"phone":"233-609-5892",
			"company":"Powlowski Inc",
			"photo":"https://robohash.org/eligendidoloremqueid.jpg?size=50x50&set=set1"
		},
		{
			"name":"Nikolia Ash",
			"phone":"657-585-7948",
			"company":"Emard-Johnston",
			"photo":"https://robohash.org/eosrecusandaeaut.png?size=50x50&set=set1"
		},
		{
			"name":"Oran Humble",
			"phone":"856-257-5303",
			"company":"O'Reilly and Sons",
			"photo":"https://robohash.org/etcumrerum.jpg?size=50x50&set=set1"
		},
		{
			"name":"Reamonn Lace",
			"phone":"844-514-2868",
			"company":"Hoppe, Armstrong and Halvorson",
			"photo":"https://robohash.org/officiissitest.jpg?size=50x50&set=set1"
		},
		{
			"name":"Sephira Gascoine",
			"phone":"419-370-3278",
			"company":"Grant Group",
			"photo":"https://robohash.org/delenitiillumalias.bmp?size=50x50&set=set1"
		},
		{
			"name":"Rahal Swannack",
			"phone":"552-240-5065",
			"company":"Ward, Vandervort and Steuber",
			"photo":"https://robohash.org/quicupiditatefacere.jpg?size=50x50&set=set1"
		},
		{
			"name":"Lenard Laydon",
			"phone":"121-832-9217",
			"company":"Jacobson-Swaniawski",
			"photo":"https://robohash.org/nemoitaqueexercitationem.png?size=50x50&set=set1"
		},
		{
			"name":"Dorry Cobson",
			"phone":"165-467-1275",
			"company":"Rutherford-Medhurst",
			"photo":"https://robohash.org/enimfugaet.jpg?size=50x50&set=set1"
		},
		{
			"name":"Francklin Fulun",
			"phone":"939-269-0065",
			"company":"Gusikowski, Rohan and Kling",
			"photo":"https://robohash.org/numquamexipsa.bmp?size=50x50&set=set1"
		},
		{
			"name":"Barnaby Yerson",
			"phone":"363-222-9897",
			"company":"Jones Group",
			"photo":"https://robohash.org/delenitiundeconsectetur.bmp?size=50x50&set=set1"
		},
		{
			"name":"Saxon Gove",
			"phone":"667-127-8386",
			"company":"O'Reilly Inc",
			"photo":"https://robohash.org/possimusincidunttotam.png?size=50x50&set=set1"
		},
		{
			"name":"Flin Jossel",
			"phone":"874-733-1870",
			"company":"Kunde, Ferry and Cummerata",
			"photo":"https://robohash.org/commodinonconsequuntur.png?size=50x50&set=set1"
		},
		{
			"name":"Theodosia Forgie",
			"phone":"501-212-4814",
			"company":"Kuhlman-Cremin",
			"photo":"https://robohash.org/dictaisteconsectetur.jpg?size=50x50&set=set1"
		},
		{
			"name":"Inger Elbourne",
			"phone":"298-169-5156",
			"company":"Ullrich-Ward",
			"photo":"https://robohash.org/deseruntsedeos.bmp?size=50x50&set=set1"
		},
		{
			"name":"Inga Kellett",
			"phone":"655-329-4926",
			"company":"Legros-Boyer",
			"photo":"https://robohash.org/innobisillum.jpg?size=50x50&set=set1"
		},
		{
			"name":"Germain Gooble",
			"phone":"449-772-0711",
			"company":"Conroy-Bauch",
			"photo":"https://robohash.org/saepesuntexercitationem.bmp?size=50x50&set=set1"
		},
		{
			"name":"Crin Crumbie",
			"phone":"181-692-6072",
			"company":"Hodkiewicz, Roberts and Reichel","photo":"https://robohash.org/dolorescumaccusamus.png?size=50x50&set=set1"
		},
		{
			"name":"Gretta Tiller",
			"phone":"589-436-3588",
			"company":"Powlowski LLC",
			"photo":"https://robohash.org/doloribusminimarerum.png?size=50x50&set=set1"
		},
		{
			"name":"Paddy Northam",
			"phone":"159-786-1144",
			"company":"Bechtelar-Kris",
			"photo":"https://robohash.org/estdoloremqueprovident.jpg?size=50x50&set=set1"
		},
		{
			"name":"Donovan Oven",
			"phone":"371-208-1287",
			"company":"Veum-Krajcik",
			"photo":"https://robohash.org/illumautemlabore.bmp?size=50x50&set=set1"
		},
		{
			"name":"Norman Pratton",
			"phone":"280-811-2283",
			"company":"King, Walter and Mosciski",
			"photo":"https://robohash.org/voluptatibuscumqueassumenda.bmp?size=50x50&set=set1"
		},
		{
			"name":"Derby Kitchingham",
			"phone":"866-527-6600",
			"company":"Gleichner-Mayer",
			"photo":"https://robohash.org/enimreiciendisquis.bmp?size=50x50&set=set1"
		},
		{
			"name":"Jacquenetta Bellward",
			"phone":"760-617-1933",
			"company":"Baumbach-MacGyver",
			"photo":"https://robohash.org/similiquequasiperspiciatis.jpg?size=50x50&set=set1"
		},
		{
			"name":"Desi Geillier",
			"phone":"673-122-1612",
			"company":"Sawayn LLC",
			"photo":"https://robohash.org/teneturmollitiaet.bmp?size=50x50&set=set1"
		},
		{
			"name":"Noami O'Farrell",
			"phone":"232-168-8928",
			"company":"Kshlerin Inc",
			"photo":"https://robohash.org/voluptasrecusandaeatque.bmp?size=50x50&set=set1"
		},
		{
			"name":"Gianna Assel",
			"phone":"280-763-0870",
			"company":"Kling-Lang",
			"photo":"https://robohash.org/estauteos.png?size=50x50&set=set1"
		},
		{
			"name":"Alejoa Boeter",
			"phone":"318-194-2217",
			"company":"Homenick, Harvey and Buckridge",
			"photo":"https://robohash.org/eaquisint.jpg?size=50x50&set=set1"
		},
		{
			"name":"William Fessier",
			"phone":"868-216-5007",
			"company":"McLaughlin and Sons",
			"photo":"https://robohash.org/debitisvoluptasvoluptas.png?size=50x50&set=set1"
		},
		{
			"name":"Juliann Oates",
			"phone":"865-393-2258",
			"company":"Mills, Kuphal and Jacobs",
			"photo":"https://robohash.org/voluptatemmolestiasvoluptate.jpg?size=50x50&set=set1"
		},
		{
			"name":"Ax Swinden",
			"phone":"768-850-6139",
			"company":"Luettgen, Wiegand and Dare",
			"photo":"https://robohash.org/laboriosammodipariatur.jpg?size=50x50&set=set1"
		},
		{
			"name":"Verena Lesmonde",
			"phone":"618-505-7096",
			"company":"Kreiger-Thiel",
			"photo":"https://robohash.org/quodtemporibusipsa.jpg?size=50x50&set=set1"
		},
		{
			"name":"Alphard Whitelaw",
			"phone":"842-612-7578",
			"company":"Schaefer, Kreiger and Torphy",
			"photo":"https://robohash.org/nesciuntvelitaliquam.png?size=50x50&set=set1"
		},
		{
			"name":"Reagen Houseley",
			"phone":"558-346-0602",
			"company":"Tillman and Sons",
			"photo":"https://robohash.org/inidquod.jpg?size=50x50&set=set1"
		}
		];
	}

    return {
        list: list
    };
}]);



