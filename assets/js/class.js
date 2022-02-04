let endGame = false;


class Character {

    constructor(hp = 150, streght = 15, name = 'default_name', defense = 10, image) {
        this.hp = hp;
        this.streght = streght;
        this.name = name;
        this.defense = defense;
        this.image = image;
        logIt('New Character', ' The Fighter ' + this.name + ' join the Ring.', 0);
        this.weapon = new Weapons();
    }

    sayHello = function () {
        alert("hello!")
    }

    hitEnemy = function (enemy) {
        let dice = entierAleatoire(1, 20)
        let hit = dice + this.weapon.damages
        if (dice == 1) {
            logIt('Facepalm ', this.name + ' missed his attack.', 2);
        } else {
            let damages = hit - enemy.defense;
            if (damages >= 0) {
                enemy.hp -= damages;
                logIt('Action ', this.name + ' has caused ' + damages + " DPS " + ' à ' + enemy.name + ' he has ' + enemy.hp + ' HP.', 3);
            } else {
                logIt('Action ', this.name + ' Miss his attack, NOOB!', 2);
            }
        }
        if (enemy.hp <= 0) {
            enemy.die();
        }
    }

    die = function () {
        endGame = true;
        logIt('Sayonara ', this.name + ' is dead!', 1)
        this.isDead = true;
    }
}

////weapons///

class Weapons {
    constructor() {
        this.damages = entierAleatoire(10, 80);
        this.name = firstWeapon[entierAleatoire(0, 12)] + secondWeapon[entierAleatoire(0, 7)];
        logIt("Weapon loot ", " Legendary Weapon : " + this.name + " is looted whit " + this.damages + " DMG.", 4);
    }
}

class theGame {
    constructor(numberPlayers) {
        this.players = []
        this.lastManStanding = true
        this.numberPlayers = numberPlayers
        this.playerGenerator()
        this.affichePlayers()
    }
    playerGenerator = function () {
        for (let i = 0; i < this.numberPlayers; i++) {
            let hp = entierAleatoire(80, 150)
            let streght = entierAleatoire(10, 30)
            let bismila = entierAleatoire(0, 20);
            let name = npc[bismila].nom
            let image = npc[bismila].img_src
            let defense = entierAleatoire(0, 40)
            this.players.push(new Character(hp, streght, name, defense, image))
        }
    }
    player = function () {
        let tempPlayers = this.players
        console.log("hey", this);
        let nPlayers = this.numberPlayers
        while (this.lastManStanding) {
            let attaquant = tempPlayers[entierAleatoire(0, nPlayers - 1)]
            tempPlayers = tempPlayers.filter(o => o != attaquant)
            let noob = tempPlayers[entierAleatoire(0, nPlayers - 2)]
            attaquant.hitEnemy(noob)

            tempPlayers = this.players.filter(o => !o.isDead)
            nPlayers = tempPlayers.length
            if (nPlayers == 1) {
                this.lastManStanding = false;
            }
        }
        logIt("Hexakill: ", tempPlayers[0].name + " gain 5 honors!", 0)
    }
    affichePlayers = function () {
        let emptyTable = document.getElementById("player_container")
        let playersContainer = document.createElement("div")
        let playerZone = document.getElementById("players_zone")
        playerZone.innerHTML = ""
        for (let i in this.players) {
            let tabCopie = document.importNode(emptyTable.content, true)
            tabCopie.getElementById("player_img").src = this.players[i].image
            tabCopie.getElementById("player_name").innerHTML = this.players[i].name
            tabCopie.getElementById("player_hp").innerHTML = this.players[i].hp
            tabCopie.getElementById("player_weapon").innerHTML = this.players[i].weapon.name
            tabCopie.getElementById("player_weapon_stats").innerHTML = this.players[i].weapon.damages
            tabCopie.getElementById("player_streght").innerHTML = this.players[i].streght
            tabCopie.getElementById("player_defense").innerHTML = this.players[i].defense
            playersContainer.appendChild(tabCopie)
        }
        playerZone.appendChild(playersContainer)
    }
}

