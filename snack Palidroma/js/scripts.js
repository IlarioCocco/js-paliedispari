// Palidroma
// 1 esercizio

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function Ispalindrome(parola) {
    for (var i = 0; i <= parola.length; i--);
    if (parola){
        return true;
    }
        return false;
}

var parola = prompt("inserisci una Parola")
    console.log(parola);
    alert(parola);

// for(var i=0; i<= parola.length; i--);