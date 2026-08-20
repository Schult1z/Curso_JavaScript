// Caracteres Especiais
const pontoRegex = /./; // -> aceita qualquer coisa
console.log(pontoRegex.test("test"));
console.log(pontoRegex.test("123"));

console.log("Intervalo...");

const dRegex = /\d/; // [0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test("1234"));

console.log("Intervalo...");

const dRegex2 = /\D/; // negacao
console.log(dRegex2.test("asd"));
console.log(dRegex2.test("1234"));
console.log(dRegex2.test(" "));

console.log("Intervalo...");

const sRegex = /\s/; // espacos vazios
console.log(sRegex.test("s"));
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("1234"));
