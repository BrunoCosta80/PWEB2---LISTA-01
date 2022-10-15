alert("Q08 - Em uma certificação são feitos são feitos 5 exames (I, II, III, IV e V). Escreva um programa que leia as notas destes exames e imprima a classificação do aluno, sabendo que a média é 70.");
alert("Classificação: A – passou em todos os exames;B – passou em I, II e IV, mas não em III ou V;C – passou em I e II, III ou IV, mas não em V. Reprovado – outras situações.");

let exame_01 = 70;
let exame_02 = 80;
let exame_03 = 70;
let exame_04 = 90;
let exame_05 = 0;

alert("Contexto:  Exame 01: " + exame_01 + "Exame 02: " + exame_02 + "Exame 03: " + exame_03 + "Exame 04: " + exame_04 + "Exame 05: " + exame_05 + "");


if (exame_01 >= 70 && exame_02 >= 70 && exame_03 >= 70 && exame_04 >= 70 && exame_05 > 70) {
    alert("Resultado: Classificação A - PASSOU EM TODOS OS EXAMES");
}
else if (exame_01 >= 70 && exame_02 >= 70 && exame_03 < 70 && exame_04 >= 70 && exame_05 < 70) {
    alert("Resultado: Classificação B - PASSOU NOS EXAMES 01, 02, 04 e NÂO PASSOU NOS EXAMES 03 e 05");
}
else if (exame_01 >= 70 && exame_02 >= 70 && exame_03 >= 70 && exame_04 >= 70 && exame_05 < 70) {
    alert("Resultado: Classificação C - PASSOU NOS EXAMES 01, 02, 03, 04 e NÂO PASSOU NO EXAMES 05");
}
else {
    alert("Resultado: REPROVADO");
}