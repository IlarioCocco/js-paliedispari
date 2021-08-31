// Palidroma
// 1 esercizio


// 1 Creare una funzione per capire se la parola inserita è palindroma:  1
function stringaInversa(parola) {
var parolaInversa = "";
    for ( var i = parola.length -1; i >= 0; i--){
    parolaInversa += parola[i]
}
    return parolaInversa;
}



// 2 Chiedere all’utente di inserire una parola:  
var word = prompt("inserisci una Parola")
console.log(stringaInversa(word));



// 3 punto 
if (word == stringaInversa(word)) {
    alert("è una stringa Inversa")
}
    else {
    alert("non è una stringa Inversa")
}


 