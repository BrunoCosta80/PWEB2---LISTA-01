alert("Q12 - A série de Fibonacci é formada pela sequencia: • 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Escreva um programa que gere a série de FIBONACCI até o N-ésimo termo (com N sendo uma entrada do algoritmo).");

const number = parseInt(prompt('Digite o número de termos: '));

let n1 = 0, n2 = 1, nextTerm;

alert("Série de Fibonacci: ");

for (let i = 1; i <= number; i++) {
    alert(n1 + " ");
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}