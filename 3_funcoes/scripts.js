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