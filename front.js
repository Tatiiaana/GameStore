$.get("http://localhost:3000/", function(res) {
var db = res;
make_gotm(db);
});
/*
$.get("http://localhost:3000/categories", function(res) {
var db = res;
make_item(db);
});

$.get("http://localhost:3000/Action", function(res) {
var db = res;
make_item(db);
});

$.get("http://localhost:3000/Fighting", function(res) {
var db = res;
make_item(db);
});

$.get("http://localhost:3000/RPG", function(res) {
var db = res;
make_item(db);
});

$.get("http://localhost:3000/Arcade", function(res) {
var db = res;
make_item(db);
});

$.get("http://localhost:3000/MOBA", function(res) {
var db = res;
make_item(db);
});

$.get("http://localhost:3000/FPS", function(res) {
var db = res;
make_item(db);
});
*/
var container = document.getElementById("container");
var header = document.createElement("header");

var title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.textContent = "GameStore";

var paragraphe = document.createElement("p");
    paragraphe.setAttribute("class", "paragraphe");
    paragraphe.innerHTML = "Make good deals on games, extensions, pre-orders and more <br> Even more discounts for GameStore Plus subscribers";

var logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    logo.setAttribute("src", "images/gamestore_logo.png");

var basket = document.createElement("img");
    basket.setAttribute("id", "basket");
    basket.setAttribute("src", "images/shopping_basket.png");
var namelist = ["Home", "New", "Promotions", "Store", "GameStore Plus"];
var ul = document.createElement("ul");

container.appendChild(ul);
ul.appendChild(logo);
ul.appendChild(basket);



for (let i = 0; i < 5; i++) {
var list = document.createElement("li");
var a = document.createElement("a");
a.setAttribute("href", "#");
list.setAttribute("class", "list");
a.textContent = namelist[i];
ul.appendChild(list);
list.appendChild(a);

if (i == 3) {
list.setAttribute("id", "scroll_menu");
}
}

console.log(namelist);

basket.addEventListener("click", function() {
btnBasket();
});

container.appendChild(header);

ul.appendChild(list);
var divSearch = document.createElement('div');
divSearch.setAttribute('id', 'div_search');
var inputSearch = document.createElement("input");
inputSearch.setAttribute("id", "input_search");
var buttonSearch = document.getElementById('btnSearch');


ul.appendChild(divSearch);
divSearch.appendChild(inputSearch);
divSearch.appendChild(buttonSearch);


header.appendChild(title);
header.appendChild(paragraphe);


var basket = document.createElement("img");
    basket.setAttribute("id", "basket");
    basket.setAttribute("src", "images/shopping_basket.png");
var gotm = document.createElement("div");
    gotm.setAttribute("id", "gotm");

container.appendChild(gotm);

var games_of_the_moment = document.createElement("h1");
    games_of_the_moment.setAttribute("id", "title_gotm");
    games_of_the_moment.textContent = "Games Of The Moment";

var div_gotm = document.createElement("div");
    div_gotm.setAttribute("id", "div_gotm");
gotm.appendChild(games_of_the_moment);
gotm.appendChild(div_gotm);

var footer = document.createElement('footer');
container.appendChild(footer);

function make_gotm(db) {
db.forEach(function(game) {
var games = document.createElement("div");
    games.setAttribute("class", "games_of_the_moment");
var fiche = document.createElement("div");
    fiche.setAttribute("class", "fiche");
var titlesGames = document.createElement("h1");
    titlesGames.setAttribute("class", "titlesGOTM");
    titlesGames.textContent = game.game_name;
var divImages = document.createElement('div');
    divImages.setAttribute("class", "div_images");
var imagesGames = document.createElement("img");
    imagesGames.setAttribute("src", game.game_img);
var synopsisGames = document.createElement("p");
    synopsisGames.setAttribute("class", "synopsis");
    synopsisGames.textContent = game.game_resume;
var notesGames = document.createElement("p");
    notesGames.setAttribute("class", "note");
    notesGames.textContent = game.game_note;

container.appendChild(games);
games.appendChild(fiche);
fiche.appendChild(titlesGames);
fiche.appendChild(divImages);
fiche.appendChild(imagesGames);
divImages.appendChild(synopsisGames);
divImages.appendChild(notesGames);
div_gotm.appendChild(games);
    
});
}

function make_item(db) {
db.forEach(function(game) {
var games = document.createElement("div");
    games.setAttribute("class", "games_of_the_moment");
var fiche = document.createElement("div");
    fiche.setAttribute("class", "fiche");
var titlesGames = document.createElement("h1");
    titlesGames.setAttribute("class", "titlesGOTM");
    titlesGames.textContent = game.game_name;
var imagesGames = document.createElement("img");
    imagesGames.setAttribute("src", game.game_img);
var synopsisGames = document.createElement("p");
    synopsisGames.setAttribute("class", "synopsis");
    synopsisGames.textContent = game.game_resume;
    

container.appendChild(games);
games.appendChild(fiche);
fiche.appendChild(titlesGames);
fiche.appendChild(imagesGames);
fiche.appendChild(synopsisGames);
    
});
}