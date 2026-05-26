// funcoes
function imprimirNoConsole() {
    console.log(`Ola, Mundo`);
}

imprimirNoConsole(); // chamando a funcao para ela ser executada !

function imprimirNumero(num) {
    console.log(`O numero e : ` + num);
}

imprimirNumero(2);
imprimirNumero(7);

const numeroAleatorio = function () {
    console.log(Math.random());
}

numeroAleatorio();

function multiplicar3Numeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicar3Numeros(2,6,7));
const mult = multiplicar3Numeros(5,4,8); 
console.log(`O valor de mult e: ` + mult);


function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log(`Pode dirigir !!`);
    } else if (idade >= 18 && cnh == false) {
        console.log(`Voce nao possui CNH!`);
    } else {
        console.log(`Voce nao pode dirigir ainda!`);
    }
}

podeDirigir(18,true);
podeDirigir(22, false);
podeDirigir(17, false);

// escopo
let y = 10;

function imprimir() {
    let y = 7;
    console.log(y);
}
//Vai aparecer valores diferentes pois um existe no escopo global e o outro apenas dentro da funcao;
imprimir();
console.log(y);

// nested scopes
let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if(a > 10 ) {
        let a = 0;
        console.log(a);
    }
    console.log(a);
}

console.log(a);
multiplicar(7,5);

//arrow function 

let consoleTeste = () => {
    console.log(`Ola Mundo`);
}
consoleTeste();

let soma = (a,b) => {
    return a +b;
}

console.log(soma(10,20));

// Argumentos opicionais
const nomeIdade = function (nome,idade) {
    if(idade === undefined) {
        console.log(`Seu nome e: ` + nome);
    } else {
        console.log(`Seu nome e: ` + nome + `e voce tem ` + idade + ` anos`);
    }
}

nomeIdade(`Gabriel`);
nomeIdade(`Amaral`, 19);

// argumentos default
function potencia(base, exp = 2 ) { // se nao colocar nenhum segundo numero, o 2 esta definido como default
    return Math.pow(base, exp);
}
console.log(potencia(2));
console.log(potencia(2,3));

// closure
function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}
let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(4);
console.log(soma2(7));

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
contador();
contador();
contador();

// recursion
function recursao(n) {
    if(n - 1 < 2) {
        console.log(`Recusao parou! ` + n);
    } else if (n % 2 != 0 ) {
        console.log(`Numero impar ` + n);
        recursao(n-2);
    } else {
        console.log(`Numero par ` + n);
        recursao(n -2);
    }
}

recursao(39);
recursao(10);
recursao(55);