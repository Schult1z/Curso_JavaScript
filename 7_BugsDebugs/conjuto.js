// Conjunto - porem nao e mt recomendado
const reg1 = /[12345]/;
console.log(reg1.test("Temos o numero 6"));
console.log(reg1.test("aqui temos o numero 2"));

const reg2 = /[0-9]/;
console.log(reg2.test("testamos o numero 65324212343456"));
console.log(reg2.test("testamos o"));
