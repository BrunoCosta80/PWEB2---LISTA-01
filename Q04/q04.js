alert("Q04 - Dado um inteiro não-negativo n, determinar n!");
let num = 5
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
alert("O fatorial de "+ num + " é " + factorialize(num));