console.log('Hello world script.js !'); //console.log imprime algo na tela

console.log(typeof 10);
console.log(typeof 12.7);
console.log(typeof -10);

// operacoes aritimeticas

console.log(typeof(10 + 10));
console.log(10 - 5);
console.log(10 * 10);
console.log(10 / 2);
console.log(10 % 2); // resto

//special numbers

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

// strings
console.log(`Gabriel`);// isso e uma string(texto)
console.log(`uma linha \n segunda linha`);
console.log(`2 + 2 e: ${2+2}`);
console.log(`meu `+`nome `+`Gabriel`);

// Booleans (True or False)

console.log(5<2); // resultado: False
console.log(5>2); // resultado: True

console.log(typeof true);
console.log(typeof false);

// operadores logicos

// && and - para ser True (Os dois "lados" precisam ser true)
// || or - para ser True (Basta um dos lados da comparacao ser true)
// ! not - inverter os valores (true vira false)

// operador ternario (faz um comparativo em apenas um linha)
console.log(10 > 4 ? `Sim` : `Nao`);

// Empty Values (Valores nao existem ou sao nulos)
console.log(undefined);
console.log(null);

// Conversao automatica
console.log(5 * null); // 0
console.log(`5` - 3); // 2
console.log(`5`+ 1); // 51
console.log9(2 * `tres`) // NaN