// Arrays
let arr = [1,2,3,4,5];
let nomes = [`Gabriel`, `Joao`, `Arthur`, `Ricardo`];
let bool = [true, false, true, false];
let misturado = [1, `Amaral`, true];

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado);

// Chamando valores da array, comeca do 0 ao 9
let alunos = [`Joao`, `Amaral`, `Cloves`];
console.log(alunos[2]); // vai aparecer o Cloves
console.log(arr[arr.length - 1]); // para acessar o ultimo valor do array

// Metodos (transformar os dados)
let marca = 'Nike';
console.log(marca.toUpperCase());
console.log(typeof marca.toUpperCase());
//.propriedade;
// metodo();

// Objetos
let aluno = {
    nome: `Gabriel`,
    sobrenome: `Schultz`,
    idade: 20,
    apresentar: function() { // metodo
        console.log(`Ola, meu nome e Gabriel`);
    }
};
console.log(aluno.idade);
aluno.apresentar();

//  [] = array | {} = objetos

// Deletando e criando propriedades (dentro do Objeto)
let carro = {
    marca: `VW`,
    portas: 4,
    manual: true,
    motor: `2.0 turbo`
}

console.log(carro.manual);
delete carro.manual; // aqui eu deletei
console.log(carro.manual); // aparece undefield
carro.manual = true;// aqui eu adicionei
console.log(carro.manual);

// assign 
let car = {
    portas: 2,
    portaMalas: `200L`,
    motor: `1.5`
}

let adicionais = {
    tetoSolar: true,
    arcondicionado: true,
}
console.log(car);
Object.assign (car, adicionais); // o carro agora ganha os `valores` dos adicionais
console.log(car);

// .keys -  chave = valor (dentro do objeto)
let objetoA = {
    prop1: `Teste1`,
    prop2: `Test2`,
}
console.log(Object.keys(objetoA)); //.keys mostra apenas as chaves (sem os valores)

// mutability
let objA = {
    pontos: 10,
}
objB = objA;

let objC = {
    pontos:10,
}

console.log(objA == objB) // true
console.log(objA == objC) // false

// loops em array
let numeros = [1,2,3,4,5];
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // percore dentro de todos os valores dentro da array 
}

let nomes = [`matheus`, `maria`, `gabriel`];
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// metodo push e pop
let nomes = [`Ricardo`, `Maria`, `Gabriel`];
let elementoRemovido = nomes.pop(); // .pop() remove o ultimo elemento da array

console.log(elementoRemovido);
console.log(nomes);

nome.push(`Pedro`); // .push() adiciona um elemento no final da array 
console.log(nomes);

// metodos shift e unshift 
// .shift() remove o primeiro elemento da array
// .unshift() adiciona no primeiro indice da array

let carros = [`BMW`, `AUDI`, `VW`];
let removerCarro = carros.shift();

console.log(removerCarro);
console.log(carros);

carros.unshift(`Ferrari`);
console.log(carros[0]);

// metodos indexof e lastindexof
// .indexof() procura e entrega o indice do primeiro elemento procurado
// .lastindexof() procura o ultimo elemento que foi pedido e entrega o indice dele

let nums = [3,5,2,6,7,11,9,2,15];
console.log(nums.indexOf(2)); // me da o indice 2 `primerio lugar que ele viu o numero 2
console.log(nums.lastIndexOf(2)); // me da o indice 7 `ultimo 2 que ele achou

// slice  
let number = [0,1,2,3,4,5,6,7,8,9];
console.log(number.slice(4,5)); // pega a partir do 4, e para no ultimo numero 5, porem nao mostra aonde para
console.log(number.slice(4,6)); // assim mostra 4,5 (6-1);
console.log(number.slice(2)); // se eu nao determinar aonde parar pega ate o final

// forEach (intera a cada elemento da array)
let names = [`maria`, `jose`, `Gioavane`, `yuri`];
names.forEach(name => {
    console.log(`O nome e ${name}`);
})

// includes (verifica se possui aquele elemento dentro da array)
let carros = [`BMW`, `Fiat`, `Audi`];
console.log(carros.includes(`Audi`)); // true

// reverse (inverte a array)
let numeros = [1,2,3,4,5,6,7];
console.log(numeros.reverse());

// padStart (adiciona caracteres antes da string)
let sku = `34`;
console.log(sku.padStart(6, `0`)); // 6 digitos, como ja tem 34 adiciona 4 zeros

// split (divide a minha string em uma array)
let frase = `testando o metodo split`;
console.log(frase.split(` `));
let palavras = frase.split(` `);
console.log(palavras);

// join (ele pega uma array em uma frase)
let frase = `testando o metodo split`;
let palavras = frase.split(` `);
let novaFrase = palavras.join(`@`);
console.log(novaFrase);

// repeat (repete a string de acordo com o parametro que receber)
let palavra = `repetir `;
console.log(palavra.repeat(20));

// rest operator (uma forma de uma funcao receber indefinidos parametros)
let num = 1;
let num1 = 5;
let num2 = 6;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
imprimirNumeros(num,num1,num2);
console.log(`pausa`);
imprimirNumeros(num2,num3);
console.log(`pausa`);
imprimirNumeros(2,3,4,5,6,7,8,9,10,11,12,13)

// Destructuring Obj
let obj = {
    rodas: 4,
    portas: 4,
    motor: `2.0`,
    teto: true,
}
const {rodas: vRodas, portas: vPortas, moto: vMotor, teto: vTeto} = obj; // cria variaveis apartir das chaves de um obj
console.log(vRodas);
console.log(vTeto);

// Destructuring em Array
let studing = [`Joao`, `Ricardo`, `Arthur`, `Gabriel`];
let [nomeA, nomeB, nomeC, nomeD] = studing;
console.log(nomeD);