// je vais chercher le driver sqlite3 dans node_modules
const sqlite3 = require("sqlite3").verbose(); // verbose décris les erreures
const express = require("express"); // express pour créé les routes
const dbFile = "test.db"; // créé ficher db qui sera la base de donnée
const db = new sqlite3.Database(dbFile); // rempli base de donné
const cors = require("cors"); // autorise le partage d'info
const app = express();
app.use(cors());

db.serialize(() => {
  //effectu une action et attend la fin de cette action avant la suite du code
  db.run(
    "CREATE TABLE IF NOT EXISTS categories (category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name VARCHAR(50) UNIQUE)"
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS games (game_id INTEGER PRIMARY KEY AUTOINCREMENT, game_name VARCHAR(50) UNIQUE, game_img VARCHAR(200), game_resume VARCHAR(50), game_commentary VARCHAR(300), game_note INTEGER , category_name ,FOREIGN KEY (category_name) REFERENCES categories(category_name))"
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, category_name) VALUES (?,?,?,?,?,?)",
    "GTA",
    "none.jpg",
    "pas encore",
    "c marrant",
    "13",
    "action"
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, category_name) VALUES (?,?,?,?,?,?)",
    "BLACK OPS",
    "none.jpg",
    "pas encore",
    "c tro nul",
    "2",
    "fps"
  );

  db.run(
    "INSERT INTO games (game_name, game_img, game_resume, game_commentary, game_note, category_name) VALUES (?,?,?,?,?,?)",
    "LEAGUE OF LEGENDS",
    "none.jpg",
    "pas encore",
    "c bof",
    "5",
    "moba"
  );

  db.run("INSERT INTO categories (category_name) VALUES (?)", "action");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "adventure");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "rpg");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "arcade");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "moba");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "mmo_rpg");
  db.run("INSERT INTO categories (category_name) VALUES (?)", "fps");
});

app.get("/", function(request, response) {
  db.all("SELECT * FROM games", function(error, data) {
    response.send(data);
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.listen(3000, function() {
  console.log("il à pas dis bonjour");
});
