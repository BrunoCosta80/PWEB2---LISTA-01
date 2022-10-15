alert("Q09 - Escreva um programa que determine se um dado número N (digitado pelo usuário) é primo ou não.");

  let numero = 81;
  let divisores = 0;

  alert("Entrada: " + numero + "");

  for (var count = 1; count <= numero; count++)
    if (numero % count == 0)
      divisores++;

  if (divisores == 2)
  alert("Resultado :" + numero + " é primo");
  else
  alert("Resultado: " + numero + " não é primo");