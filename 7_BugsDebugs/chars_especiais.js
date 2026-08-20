// Conjunto de Caracteres Especiais
const dia = /\d\d/;

console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("2026") && "2026".length == 2); // demilitei a quantidade de caracter que eu quero

console.log("Intervalo . . . ");

const palavrasTresLetras = /\w\w\w/;

console.log(palavrasTresLetras.test("asd"));
console.log(palavrasTresLetras.test("asd") && "asd".length == 2);