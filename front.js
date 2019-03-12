$.get("http://localhost:3000/", function (res) {
  var db = res;
  make_item(db);
});


var gamesOfTheMoment = [

  { name: 'Super Smash Bros : Ultimate', img: 'images/SSBU.png', synopsis: "Super Smash Bros Ultimate is a fighting game on Switch. This Ultimate opus brings together all the fighters already appeared in the history of Super Smash Bros. 75 playable characters will be available by counting the trainer, as well as all his Pokémon...", commentary: "I feel the same way as with Melee during my childhood. The game is complete, beautiful, funny addictive and fun to play. The OST is masterful, the game modes are legion, the characters are all there, and just the game out there is already announced a new! In short, whether you are a neophyte or a regular, go for it because in both cases you will not regret your purchase. This is THE Switch game of the year.", note: 16.2, type: 'Type : Combat' },
  { name: 'The Last of Us', img: 'images/TLOU.jpg', synopsis: "The survival action The Last of Us on PS3 follows Joel and Ellie across the United States. The two will have to help each other to survive a mysterious plague. Nature begins to appropriate the abandoned cities and the few survivors kill each other to recover the little food and weapons still present.", commentary: "The Last of Us is a must have on PS3. Innovative, the atmosphere is superb. Endearing characters, a narrative very well built. The stress is at the rendezvous knowing that we must manage its ammunition sparingly.", note: 18.7, type: 'Type : Action' },
  { name: 'League of Legends', img: 'images/LOL.jpg', synopsis: "League of Legends is a MOBA, a multiplayer online battle arena. In the classic mode, two teams of five players compete in games that last on average between 40 minutes and the goal is to destroy the enemy base. Playing in a hero-fantasy universe, each player embodies a different champion, with unique abilities, which he chooses at the beginning of the game. Random modes are also present, as well as seasonal events that bring a breath of novelty.", commentary: "A very good game in F2P, everything is graphic, strategy, number of characters ... But unfortunately, the experience is not always happy, the fault of an absolutely disastrous community: in addition to insults and intolerance it is forbidden to be a beginner to this game ... It reminds me of a well-known MMO but this is another story.", note: 15.7, type: 'Type : MOBA' },

];

  var container = document.getElementById('container');

  var header = document.createElement('header');
  var title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = "GameStore";

  var paragraphe = document.createElement('p');
  paragraphe.setAttribute('class', 'paragraphe');
  paragraphe.innerHTML = "Do business on games, extensions, pre-orders and more. <br> Even more discounts for GameStore Plus subscribers.";


  var logo = document.createElement('img');
  logo.setAttribute('id', 'logo');
  logo.setAttribute('src', 'images/gamestore_logo.png');


  var basket = document.createElement('img');
  basket.setAttribute('id', 'basket');
  basket.setAttribute('src', 'images/shopping_basket.png');
  ;

  var namelist = ["Home", "Games", "GameStore Plus", "Store", "Help"];
  var ul = document.createElement('ul');

  container.appendChild(ul);
  ul.appendChild(logo);
  ul.appendChild(basket);
  for (let i = 0; i < 5; i++) {
    var list = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href', '#')
    list.setAttribute('class', 'list');
    a.textContent = namelist[i];
    ul.appendChild(list);
    list.appendChild(a);


    if (i == 1) {
      list.setAttribute('id', 'scroll_menu');
    }

  }

  console.log(namelist);


  basket.addEventListener('click', function () {
    btnBasket();
  });

  container.appendChild(header);
  
  
  ul.appendChild(list);
  header.appendChild(title);
  header.appendChild(paragraphe);
  


  var basket = document.createElement('img');
  basket.setAttribute('id', 'basket');
  basket.setAttribute('src', 'images/shopping_basket.png');
  ;


  var gotm = document.createElement('div');
  gotm.setAttribute('id', 'gotm');

  container.appendChild(gotm);

  function make_item(db) {
  db.forEach(function (game) {
    console.log(game);
    var games = document.createElement('div');
    games.setAttribute('class', "games_of_the_moment");
    var fiche = document.createElement('div');
    fiche.setAttribute('class', "fiche");
    var titlesGames = document.createElement('h1');
    titlesGames.setAttribute('class', 'titlesGOTM');
    titlesGames.textContent = game.game_name;
    var imagesGames = document.createElement('img');
    imagesGames.setAttribute('src', game.game_img);
    var synopsisGames = document.createElement('p');
    synopsisGames.setAttribute('class', 'synopsis');
    synopsisGames.textContent = game.game_resume;


    container.appendChild(games);
    games.appendChild(fiche);
    fiche.appendChild(titlesGames); 
    fiche.appendChild(imagesGames);
    fiche.appendChild(synopsisGames);
  
    gotm.appendChild(games);

  });
  }
