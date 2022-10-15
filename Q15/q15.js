alert("Q15 - Calcular os divisores de um nº qualquer.");

let num = parseInt(prompt("Digite um número: "));
let quantDivisores = 0;

alert("Divisores do número " + num + " : ");

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    document.write(i + " ");

    quantDivisores++;
  }
}

alert("Quantidade de divisores: ", quantDivisores);