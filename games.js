$.get("http://localhost:3000/", function(res) {
    var db = res;
    addItems(db);
});

var container = document.getElementById("container");


var games = document.createElement('div');
games.id = "games";
        
function addItems(db) {
    db.forEach(function(game) {

    var blockGames = document.createElement('div');
        blockGames.id = "block_games";

    var gamesImages = document.createElement('div');
        gamesImages.id = "game_images";

    var image = document.createElement('img');
        image.src = game.game_img;

    var synopsisGames = document.createElement("p");
        synopsisGames.setAttribute("class", "synopsis");
        synopsisGames.textContent = game.game_resume;

    var commentaryGames = document.createElement("p");
        commentaryGames.setAttribute("class", "resume");
        commentaryGames.textContent = game.game_commentary;
        
    var noteGames = document.createElement("h6")
        noteGames.setAttribute("class", "note");

        // var priceGames = document.createElement("")
        //priceGames.id = game.game_price;

        var btn = document.createElement('button');
        var textBtn = document.createTextNode('ADD TO BASKET');
        btn.setAttribute('id', 'buy_button');

        function btnBuy() {
            document.getElementById('basket').style.color = 'darkred';
            console.log("Je mets le jeu à mon panier");
          }
          btn.addEventListener('click', function() {
              btnBuy();
              
               
          });
        
        container.appendChild(games);
        games.appendChild(blockGames);
        blockGames.appendChild(gamesImages);
        gamesImages.appendChild(image);
        blockGames.appendChild(synopsisGames);
        blockGames.appendChild(commentaryGames);
        blockGames.appendChild(noteGames);
    

        
        

});



}

