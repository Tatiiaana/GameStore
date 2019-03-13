$.get("http://localhost:3000/", function(res) {
var db = res;
make_items(db);
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
    paragraphe.innerHTML = "Do business on games, extensions, pre-orders and more <br> Even more discounts for GameStore Plus subscribers";

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

var basket = document.createElement("img");
    basket.setAttribute("id", "basket");
    basket.setAttribute("src", "images/shopping_basket.png");



var footer = document.createElement('footer');
container.appendChild(footer);

function make_items(db) {
    db.forEach(function (game) {
var containerGames = document.createElement("div");
    containerGames.setAttribute('id', 'container_games');
var games = document.createElement("div");
    games.setAttribute("class", "games");
var titles = document.createElement("h1");
    titles.setAttribute("class", "titles");
    titles.textContent = game.game_name;
var images = document.createElement("img");
    images.setAttribute("src", game.game_img)
var divSynopsis = document.createElement("div");
    divSynopsis.setAttribute("class", "div_synopsis");
var synopsis = document.createElement("p");
    synopsis.setAttribute("class", "synopsis");
    synopsis.textContent = game.game_resume;
var divElements = document.createElement("div");
    divElements.setAttribute("class", "div_elements");
var price = document.createElement('p');
    price.setAttribute("class", "price");
    price.textContent = game.game_price;
var note = document.createElement('p');
    note.setAttribute("class", "note");
    note.textContent = game.game_note;
        

    var btn = document.createElement('button');
    var textBtn = document.createTextNode('BUY');
    btn.setAttribute('id', 'buy');
        
        
        
container.appendChild(header);
header.appendChild(containerGames);
containerGames.appendChild(games);
games.appendChild(titles);
games.appendChild(images);
games.appendChild(divSynopsis);
divSynopsis.appendChild(synopsis);
games.appendChild(divElements)
divElements.appendChild(btn);
divElements.appendChild(price);
divElements.appendChild(note);
        

  btn.appendChild(textBtn);
    
});
}



