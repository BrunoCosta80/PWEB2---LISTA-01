alert("Q10 - Escreva um programa que leia um número e exiba se ele é positivo ou negativo.");

let numero = parseInt(prompt("Digite um valor"));

alert("Você digitou : " + numero);

if (numero > 0) {
    alert("É POSITIVO");
} else if (numero < 0) {
    alert("É NEGATIVO");
} else {
  alert("É IGUAL A ZERO!")
}