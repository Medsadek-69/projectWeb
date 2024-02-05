//execercie 2
function diviseur(n) {
    let somme = 1;
    for (let i = 2; i * i <= x; i++) {
        if (n % i === 0) {
            somme += i;
            var  d = n / i;
            if (d !== i) {
                somme += d;
            }
        }
    }
    return somme;
}

function nbparfaits(n) {
    for (let i = 2; i < n; i++) {
        if (diviseur(i) === i) {
            console.log(i);
        }
    }
}
//exercice3
const chaine1 = "abc";
const chaine2 = "de";

const resultats = [];

for (let i = 0; i < chaine1.length; i++) {
    for (let j = 0; j < chaine2.length; j++) {
        resultats.push(chaine1[i] + chaine2[j]);
    }
}

console.log(resultats);
//exercice 4:
let T = [17, 38, 10, 25, 72];

T.sort((a, b) => a - b);
console.log("Tableau trié :", T);

T.push(12);
console.log("Tableau avec l'élément 12 ajouté :", T);

T.reverse();
console.log("Tableau renversé :", T);

const indice17 = T.indexOf(17);
console.log("Indice de l'élément 17 :", indice17);

T.splice(T.indexOf(38), 1);
console.log("Tableau après suppression de l'élément 38 :", T);

const sousTableau23 = T.slice(1, 3);
console.log("Sous-tableau du 2e au 3e élément :", sousTableau23);

const sousTableauDebut2 = T.slice(0, 2);
console.log("Sous-tableau du début au 2e élément :", sousTableauDebut2);

const sousTableau3Fin = T.slice(2);
console.log("Sous-tableau du 3e élément à la fin de la liste :", sousTableau3Fin);