// usando Strict -> serve para deixar o codigo mais rigoroso
// "use strict"
// let opa = 'Teste';
// Metodo Debug
 let a = 1;
 let b = 2;
 let c = 3;

 if(c > a ) {
     a = b;
     console.log(a);
 }

 for (i = 5; i > 0; i--) {
     b++;
     a = a + c + 1;
     c += 2;
     console.log(a);
 }

 if(b == a) {
     a++; 
 } else {
     a = a + b + c;
 }

console.log(a);

 a = a * b;

 console.log(a);

// Debugger -> para o codigo aonde ela estiver
let g = 1;
let f = 2;
let h = 3;

if(h > g ) {
    g = f;
    console.log(g);
    // debugger;
}

for (let i = 5; i > 0; i--) {
    f++;
    g = g + h + 1;
    h += 2;
    console.log(g);
    // debugger;
}

if(f == g) {
    g++; 
} else {
    g = g + f + h;
}
console.log(g);
// debugger;

g = g * f;
console.log(g); 
// debugger;

console.log(`Teste`)

// tratamento de input
function checarNumero(num) {
    let number = Number(num);

    if(Number.isNaN(number)) {
        alert(`Por Favor passe apenas numeros !`);
    } else {
        return number;
    }
}

checarNumero(10);
// checarNumero(`Gabriel`);

let number = prompt(`Digite um numeor:`);
checarNumero(number);