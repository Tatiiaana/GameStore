// je vais chercher le driver sqlite3 dans node_modules
const sqlite3 = require("sqlite3").verbose(); // verbose décris les erreures
const express = require("express"); // express pour créé les routes
const dbFile = "testroutes.db"; // créé ficher db qui sera la base de donnée
const db = new sqlite3.Database(dbFile); // rempli base de donné
const cors = require("cors"); // autorise le partage d'info
const app = express();
const bodyParser = require("body-parser");



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.serialize(() => {
  //effectu une Action et attend la fin de cette Action avant la suite du code
  db.run(
    "CREATE TABLE IF NOT EXISTS categories (category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name VARCHAR(50) UNIQUE)"
  );


  // Habib: J'ai ajouté les mock-datas de Tatiana dans la base de données pour conserver le même modèle qu'elle a utilisé en front

  db.run(
    "CREATE TABLE IF NOT EXISTS games (game_id INTEGER PRIMARY KEY AUTOINCREMENT, game_name VARCHAR(50) UNIQUE, game_img VARCHAR(200), game_resume VARCHAR(500), game_commentary VARCHAR(300), game_note VARCHAR(5), game_price INTEGER,gotm INTEGER, category_name, FOREIGN KEY (category_name) REFERENCES categories(category_name))"
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Super Smash Bros : Ultimate",
    "images/SSBU.png",
    "Super Smash Bros Ultimate is a Fighting game on Switch. This Ultimate opus brings together all the fighters already appeared in the history of Super Smash Bros. 75 playable characters will be available by counting the trainer, as well as all his Pokémon...",
    "I feel the same way as with Melee during my childhood. The game is complete, beautiful, funny addictive and fun to play. The OST is masterful, the game modes are legion, the characters are all there, and just the game out there is already announced a new! In short, whether you are a neophyte or a regular, go for it because in both cases you will not regret your purchase. This is THE Switch game of the year.",
    16.2,
    "20€",
    "Fighting",
    1
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "The Last of Us",
    "images/TLOU.jpg",
    "The survival action The Last of Us on PS3 follows Joel and Ellie across the United States. The two will have to help each other to survive a mysterious plague. Nature begins to appropriate the abandoned cities and the few survivors kill each other to recover the little food and weapons still present.",
    "The Last of Us is a must have on PS3. Innovative, the atmosphere is superb. Endearing characters, a narrative very well built. The stress is at the rendezvous knowing that we must manage its ammunition sparingly.",
    16.8,
    "8€",
    "Action",
    1
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "League of Legends",
    "images/LOL.jpg",
    "League of Legends is a MOBA, a multiplayer online battle arena. In the classic mode, two teams of five players compete in games that last on average between 40 minutes and the goal is to destroy the enemy base. Playing in a hero-fantasy universe, each player embodies a different champion, with unique abilities, which he chooses at the beginning of the game. Random modes are also present, as well as seasonal events that bring a breath of novelty.",
    "A very good game in F2P, everything is graphic, strategy, number of characters ... But unfortunately, the experience is not always happy, the fault of an absolutely disastrous community: in addition to insults and intolerance it is forbidden to be a beginner to this game ... It reminds me of a well-known MMO but this is another story.",
    15.7,
    "Gratuit",
    "MOBA",
    1
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Grand Theft Auto V",
    "images/GTA.png",
    "Grand Theft Auto (GTA) open-world action-adventure game V puts you in the shoes of three new characters: Michael, Trevor and Franklin. The latter live in Los Santos, a town in the San Andreas region. Braking and missions are part of the daily life of the player who can also coexist with 15 other users in this persistent universe if he plays on PS3 / Xbox 360 or 29 if he plays on PS4 / Xbox One / PC.",
    "Well be serious must stop right now, this game does not deserve in any case a 19/20. The graphics: so yes certainly it's nice, there is not too much slowing except for me when we move from one area to another but it may come from home (whatever I wonder how saw the config that I\'m doing .....)",
    18,
    "30€",
    "Action",
    0
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Dead or Alive 5",
    "images/DOA5.png",
    "Dead or Alive 5 is a fighting game to find the famous fighters of the series on Playstation 3. In the skin of Kasumi, Tina or Akira Yuki of Virtua Fighter, the player can fight solo and 2 against 2. Several game modes, including a fully scripted story mode, are available to vary the fun both locally and online.",
    "Well be serious must stop right now, this game does not deserve in any case a 19/20. The graphics: so yes certainly it's nice, there is not too much slowing except for me when we move from one area to another but it may come from home (whatever I wonder how saw the config that I\'m doing .....)",
    17,
    "40€",
    "Fighting",
    0
  );


  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Pac-Man",
    "images/PACMAN.png",
    "Pac-Man on Commodore 64 is the adaptation of one of the most successful arcades in the history of video games. You control Pac-Man, a small yellow ball croque-tout, in labyrinths populated with colorful ghosts. The goal of the game is to eat all the little yellow dots. The slightest contact with one of the ectoplasms is fatal.",
    "This game is amazing.",
    15,
    "30€",
    "Arcade",
    0
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Final Fantasy XV",
    "images/FF.png",
    "Formerly called Final Fantasy XIII Versus, Final Fantasy XV is a J-RPG from the famous Final Fantasy series. The player plays Noctis, heir to the king, accompanied by his friends, in a modern, dark, and fantastic world",
    "I'm not going to go four ways: the PC version of Final Fantasy XV is posed as the ultimate version to acquire for anyone who has not yet jumped (for lack of a persistent indecision) or just for those seeking to afford the best experience available at the moment.",
    18,
    "30€",
    "RPG",
    0
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Call of Duty : Black Ops III",
    "images/CODBO3.png",
    "Call of Duty: Black Ops III is the new entry in the famous license of Activison. It promises a futuristic universe as we have seen in the past but without the jetpacks. We will also have the opportunity to survey a multiplayer center of the experience and bring back several cards adored by fans.",
    "This game is good.",
    16,
    "30€",
    "FPS",
    0
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, game_price, category_name, gotm) VALUES (?,?,?,?,?,?,?,?)",
    "Dota 2",
    "images/DOTA2.png",
    "DOTA 2 on PC is the sequel to the famous DOTA, pioneering a genre of games in its own right in the field of strategy, the MOBA. The principle is to fight your way to the enemy fortress to destroy it, choosing from different characters.",
    "To be honest, I discovered the Defense Of The Ancient franchise via this opus, after two years of loyal service (and bought-in RP, and cash disbursements) at the mainstream competitor I named League of Legends. It was also my first A-RTS (or MOBA as likes to call Riot).",
    17,
    "45€",
    "FPS",
    0
  );

  db.run("INSERT INTO categories (category_name) VALUES (?)", "Action");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "Fighting");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "RPG");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "Arcade");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "MOBA");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "MMORPG");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "FPS");
});

app.get("/", function (request, response) {
  db.all("SELECT * FROM games", function (error, data) {
    response.send(data);
    console.log("This is l'Acceuil");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/categories", function (request, response) {
  db.all("SELECT * FROM categories", function (error, data) {
    response.send(data);
    console.log("This is all the different categories");
    if (!error) console.log(data);
    else console.log(error);
  });

});

app.get("/GOTM", function (request, response) {
  db.all("SELECT * FROM games WHERE gotm = 1", function (error, data) {
    response.send(data);
    console.log("This is all the Action games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/Action", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'Action' ", function (error, data) {
    response.send(data);
    console.log("This is all the Action games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/Fighting", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'Fighting' ", function (error, data) {
    response.send(data);
    console.log("This is all the Fighting games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/RPG", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'RPG' ", function (error, data) {
    response.send(data);
    console.log("This is all the RPG games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/Arcade", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'Arcade' ", function (error, data) {
    response.send(data);
    console.log("This is all the Arcade games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/MOBA", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'MOBA' ", function (error, data) {
    response.send(data);
    console.log("This is all the MOBA games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/MMORPG", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'MMORPG' ", function (error, data) {
    response.send(data);
    console.log("This is all the MMORPG games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.get("/FPS", function (request, response) {
  db.all("SELECT * FROM games WHERE category_name = 'FPS' ", function (error, data) {
    response.send(data);
    console.log("This is all the FPS games");
    if (!error) console.log(data);
    else console.log(error);
  });
});

// POST

app.post("/", function (req, res) {
  console.log(req.body.game_name);
  var game = req.body;
  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note) VALUES (?,?,?,?,?)",
    game.game_name,
    game.game_img,
    game.game_resume,
    game.game_commentary,
    game.game_note
  );
});


app.listen(3000, function () {
  console.log("Il a pas dis bonjour (Listening at port 3000)");
});