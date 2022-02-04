// function entierAleatoire(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function logIt(action, info){
//     let theDiv = document.getElementById("games_info");
//     let content = document.createTextNode(action + ' : ' + info);
//     let jumpLine = document.createElement('br');
//     theDiv.appendChild(content);
//     theDiv.appendChild(jumpLine);

// }
let npc = [{ nom: "Akali", img_src: "../assets/img/akali.png" }, { nom: "Ashe", img_src: "../assets/img/ashe.png" }, { nom: "Blitzcrank", img_src: "../assets/img/blitzcrank.png" }, { nom: "Brand", img_src: "../assets/img/brand.png" }, { nom: "Caitlyn", img_src: "../assets/img/caitlyn.png" }, { nom: "Galio", img_src: "../assets/img/galio.png" }, { nom: "Garen", img_src: "../assets/img/garen.png" }, { nom: "Gwen", img_src: "../assets/img/gwen.png" }, { nom: "Kayle", img_src: "../assets/img/kayle.png" }, { nom: "Kindred", img_src: "../assets/img/kindred.png" }, { nom: "Lux", img_src: "../assets/img/lux.png" }, { nom: "Malzahar", img_src: "../assets/img/malzahar.png" }, { nom: "Master Yi", img_src: "../assets/img/masteryi.png" }, { nom: "Miss Fortune", img_src: "../assets/img/mf.png" }, { nom: "Morgana", img_src: "../assets/img/morgana.png" }, { nom: "Seraphine", img_src: "../assets/img/seraphine.png" }, { nom: "Swain", img_src: "../assets/img/swain.png" }, { nom: "Sylas", img_src: "../assets/img/sylas.png" }, { nom: "Vel'koz", img_src: "../assets/img/velkoz.png" }, { nom: "Vex", img_src: "../assets/img/vex.png" }, { nom: "Volibear", img_src: "../assets/img/volibear.png" }]
let actionColor = ["darkgoldenrod", "crimson", "fuchsia", "blueviolet", "deeppink"];
let firstWeapon = [" Spirit of ", " Hammer of ", " Sword of ", " Bow of ", " Moonsilver of ", " Cannon of ", " Staff of ", " Eye of ", " Zapper of ", " Pow-Pow of ", " Whisper of ", " Nightfall of ", " Blade of "];
let secondWeapon = [" God ", " Blade ", " Poro ", " Boomer ", " Thresholds ", " Insight ", " Fishbones ", " Super Mega Death Rocket ", " Destiny "];


function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function logIt(action, info, typeAction) {
    let theDiv = document.getElementById("games_info");
    let actionText = document.createElement("span");
    actionText.innerHTML = action + " : ";
    actionText.style.color = actionColor[typeAction];
    let infoText = document.createElement("span");
    infoText.innerHTML = info;
    let jumpLine = document.createElement('br');
    theDiv.appendChild(actionText);
    theDiv.appendChild(infoText);
    theDiv.appendChild(jumpLine);
}
