alert("Q06 - Dados três números, imprimi-los em ordem crescente.");

var num1 = 8;
var num2 = 11;
var num3 = 2;

alert("Entrada ->" + num1 + " - " + num2 + " - " + num3)

var aux = num1;

if (num2 < num1) {
  aux = num2;
  num2 = num1;
  num1 = aux;
}

if (num3 < num1) {
  aux = num3;
  num3 = num1;
  num1 = aux;
}

if (num3 < num2) {
  aux = num3;
  num3 = num2;
  num2 = aux;
}

alert("Saída - > " + num1 + " - " + num2 + " - " + num3);