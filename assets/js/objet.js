let objet = new Object();
let objet2 = {};

objet.testString = 'Yo ca biche?';
objet.testNumber = 12.5;

objet.function1 = function () {
    alert('function1')
}

objet.array1 = ['cheval', 'tortue', 'poulet']

objet.parcour = function () {
    for (i in this.array1) {
        console.log(this.array1[i])
    }
}
console.log(objet);
objet.parcour()

