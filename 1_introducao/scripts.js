console.log("Hello world script.js !"); //console.log imprime algo na tela

console.log(typeof 10);
console.log(typeof 12.7);
console.log(typeof -10);

// operacoes aritimeticas

console.log(typeof (10 + 10));
console.log(10 - 5);
console.log(10 * 10);
console.log(10 / 2);
console.log(10 % 2); // resto

//special numbers

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

// strings
console.log(`Gabriel`); // isso e uma string(texto)
console.log(`uma linha \n segunda linha`);
console.log(`2 + 2 e: ${2 + 2}`);
console.log(`meu ` + `nome ` + `Gabriel`);

// Booleans (True or False)

console.log(5 < 2); // resultado: False
console.log(5 > 2); // resultado: True

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
console.log(`5` + 1); // 51
console.log(2 * `tres`); // NaN

// Variaveis (Guarda um valor na memoria)
let name = `Gabriel`;

console.log(name);
console.log(`Meu nome e ${name}!`);

let number = 5;
console.log(number * number);

let um = 1, dois = 2, tres = 3;
console.log(um, dois, tres);

const lastName = `Schultz`; //valor em const nao pode ser alterado
console.log(lastName);

// Prompt
let idade = prompt ('Qual a sua idade');
console.log(`Sua idade é ${idade}`)

// Alert
alert (`Veja esta mensagem !`);

// Math (Biblioteca / API)
let maiorNumero = Math.max(1,2,3,4,5);
console.log(`Este numero e o maior: ${maiorNumero}`);

let menorNumero = Math.min(1,2,3,4,5);
console.log(`Este e o menor numero : ${menorNumero}`);

let arredondar = Math.round(3.15671);
console.log(arredondar);

// Estruturas de controle
let years = 17;
if(years >= 18) {
    console.log(`Pode entrar!`);
} else {
    console.log(`Voce nao tem a idade apropriada!`);
}

// else if
let nome = `Arthur`

if (nome != undefined && nome == `Joaquim`) {
    console.log(`O nome esta definido !`)
} else if (nome == `Matheus` && nome.length > 5) { //Length ve quantos caracteres tem a string
    console.log(`O nome e Matheus`);
} else {
    console.log(`Nao e Matheus!`);
}

// estruturas de repeticao
let p = 7; 
while ( p >= 0 ) {
    console.log(`O p vale ` + p)
    p = p - 1;
} 

// do while
let i = 100;
do {
    console.log(i / 2)
    i = i - 5; // 95 - o console.log nao altera o valor da variavel, so apos ela
} while (i >= 0 )

// for (iniciacao, condicao, incremento)
for(let q = 0; q <= 100; q = q + 3)  {
    console.log(`A soma de q com 2 e: ${q + 2}`);
}

// Break
// let nome = ` Gabriel`
// for (let i = 0; i <= 10; i = i + 1) {
    
//     if(i == 3) {
//         nome = `Joao`
//     }

//     if(i == 5 && `Joao`){
//         console.log(`Agora seu nome e Joao`)
//         break;
//     }
//     console.log(i + nome);
// }

// continue 
for(let i = 10; i >= 0; i = i -1 ) {
    if(i % 2 == 0){
        console.log(`Caiu no continue / numero par`)
        continue;
    }
    console.log(`Numero par: ${i}`);
}

//  incrementar uma variavel
let h = 5;

while(h <= 50) {
    console.log(h);
    h += 10;
}

for(let o = 0; o < 10; o++) {
    console.log(`o i e ` + o);
}

// Switch / case
let k = `Amaral`; 

switch(k) {
    case `Joao`:
        console.log(`Seu nome e Joao`);
        break;
    case `Matheus`:
        console.log(`Seu nome e matheus`);
        break;
    case `Amaral`:
        console.log(`Seu nome e Amaral`);
        break;
    default:
        console.log(`Nome nao encontrado`);
        break; 
}