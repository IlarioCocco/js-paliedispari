// Palidroma
// 1 esercizio


// Creare una funzione per capire se la parola inserita è palindroma:  1
function IsPalindrome(parola) {
    var parolaInversa = "";
    for ( var i = parola.length -1; i >= 0; i--){
        parolaInversa += parola[i]
    }
   return parolaInversa;
}


// Chiedere all’utente di inserire una parola:  2
var word = prompt("inserisci una Parola")
console.log(IsPalindrome(word));



// 3 punto 
if (word == IsPalindrome(word)) {
    alert("sono Palindrome")
}
else {
    alert("non sono Palindrome")

}


 