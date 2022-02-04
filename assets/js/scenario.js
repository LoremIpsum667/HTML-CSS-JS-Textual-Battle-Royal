// let LoremIpsum667 = new Character(150, 25, "LoremIpsum667", 40)
// let Police = new Character(100, 20, "Police aka the Porc", 20)

// let firstNpc = new Character(200, 30, npc[entierAleatoire(0, npc.length - 1)]);
// let secondNpc = new Character(200, 30, npc[entierAleatoire(0, npc.length - 1)]);

// let game = new theGame(10);
// game.player();
let game;
function generate(){
    document.getElementById("games_info").innerHTML = "";
    game.player()
}


function launcher() {
    let choichePlayers = document.getElementById("choiche_players").value;
    if (choichePlayers === "") {
        alert("enter number of players pls")
    } else {
         game = new theGame(choichePlayers)
         game.affichePlayers()
    }
}






// function launcher() {
//     let choichePlayers = document.getElementById("choiche_players").value;
//     if (choichePlayers === "") {
//         alert("enter number of players pls")
//     } else {
//         let game = new theGame(choichePlayers)
//         game.player()
//     }
// }
// while(endGame != true){
//     firstNpc.hitEnemy(secondNpc)
//     if(endGame != true){
//         secondNpc.hitEnemy(firstNpc)
//     }
// }

// console.log("LoremIpsum667", LoremIpsum667)
// LoremIpsum667.hitEnemy(police)
// police.hitEnemy(LoremIpsum667)
// LoremIpsum667.hitEnemy(police)
// police.hitEnemy(LoremIpsum667)
// LoremIpsum667.hitEnemy(police)
// police.hitEnemy(LoremIpsum667)