alert("Q11 - Escreva um programa que leia 3 valores e escreva a soma dos 2 maiores.");

let a = 4;
let b = 1;
let c = 7;
let soma;

alert("Os valores de entrada foram: " + a + " " + b + " " + c + "");

if (a > b && b > c) {
  soma = a + b;
 alert("A SOMA DOS 2 MAIORES e: "+ soma);
}

else if (a > b && c > b) {
  soma = a + c;
  alert("A SOMA DOS 2 MAIORES e: "+ soma);
}

else if (b > c && c > a) {
  soma = b + c;
  alert("A SOMA DOS 2 MAIORES e: "+ soma);
}

else {
    alert("ERRO!");
}