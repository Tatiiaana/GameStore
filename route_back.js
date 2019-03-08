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
    "CREATE TABLE IF NOT EXISTS anime (id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), synopsis VARCHAR(500), auteur VARCHAR(50), genre VARCHAR(50), type VARCHAR(50), date_ajout VARCHAR(50), date_sorti VARCHAR(50), duree VARCHAR(50), status VARCHAR(50))"
  );
  db.run(
    "INSERT INTO anime (nom, synopsis, auteur, genre, type, date_ajout, date_sorti, duree, status) VALUES (?,?,?,?,?,?,?,?,?)",
    "Hugo",
    "Hugo",
    "Hugo",
    "Hugo",
    "Hugo",
    "Hugo",
    "Hugo",
    "Hugo",
    "Hugo"
  );
});

app.get("/", function(request, response) {
  db.all("SELECT * FROM anime", function(error, data) {
    response.send(data);
    if (!error) console.log(data);
    else console.log(error);
  });
});

app.listen(3000, function() {
  console.log("il à pas dis bonjour");
});
