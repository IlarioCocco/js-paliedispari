// Pari e Dispari
// 2 esercizio

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// 2 promt per scgliere se pari o dispari 
// 2a inseerimnento numero da 1 a 5
var numeriPari = parseInt(prompt("inserisci numero"));
console.log("numero :" + " " + numeriPari);


// var numeriDispari = prompt("inserisci numero dispari")
// for (var i = 0; i < 6; i++) {
//     if (i % 2 == 1) {
//         console.log("numeri dispari :" + " " + i);
//     }
// }


// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// getSelection. numero randomico da 1 a 5
var numeroCpuRandomico = Math.floor(Math.random() * 5) + 1;
console.log("numeri cpu :" + " " + numeroCpuRandomico);



// Sommiamo i due numeri
// somma dei numeri
var somma = numeriPari + numeroCpuRandomico;
console.log(somma);


// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)




// Dichiariamo chi ha vinto.
// se la somma dei 2 numeri è pari è lutente ha scelto pari allora l utente ha vinto.

// se la somma dei 2 numeri è disapri e l utente ha scelto a dispari, l utente ha vinto.

// se invece la somma è dispari e l utente ha scelto pari ha perso.

// se la somma è pari e l utente ha scelto dispari ha perso.