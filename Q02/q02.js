alert("Q02 - > Dado um número inteiro positivo n, calcular a soma dos n primeiros números inteiros positivos.");

const num = 6;
alert("O 'n' é igual a: " + num );
if (num > 0) {
  let soma = 0;
  for (i = 0; i <= num; i++) {
    soma = soma + i;
  }
  alert("Resultado: " + soma);
}