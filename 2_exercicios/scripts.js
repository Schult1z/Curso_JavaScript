//Exercicios

/* 1)
    console.log("Primeira string");
    console.log('Segunda string');
    console.log(`Terceira string`); Template literals
*/

/* 2)
    console.log(7)
    console.log(6.7)
    console.log(20 + 20 + 20 + 7)
*/

/* 3)
    console.log(10 > 5)
    console.log(5 <= 10)
    console.log(10 != 5) ou console.log(`Gabriel` != `Joao`)
*/

/* 4)
    console.log(3 == 3 && 4 > 1 )
    console.log(4 <= 2 || `Gabriel` == `Joao`)
    console.log(!(2 === 2)) // inverte o valor se estava true `!` faz virar false
*/

/* 5)
    console.log(5 * "Gabriel") // NaN
*/

/* 6)
    let name = `Gabriel`;
    let years = `20`;
    let autorizado = true;

    console.log(typeof name);
    console.log(typeof years);
    console.log(typeof autorizado);
*/

/* 7)
    let idade = 20;
    if (idade >= 18) {\
        console.log(Voce tem ${idade}, pode entrar)
    } else {
        console.log(`Voce nao tem a idade suficiente!)
        }
*/

/* 8)
    const name = `Gabriel`;

    if (name == `Gabriel`) {
        console.log(`Oi, ${name}`);
    } else {
        console.log(`Nome nao encontrado`);
        }
*/

/* 9) Math.pow
    console.log(Math.pow(2, 2));
    console.log(Math.pow(3, 2));
    console.log(Math.pow(18 , 2));
*/

/* 10)
    let velocidade = 120;

    if( velocidade <= 80) {
        console.log(`Voce passou no limite permitido);
    } else {
        console.log(`Levou multa por ultrapassar a velocidade permitida`);
        }
*/

/* 11)
    let idade = 19;
    let cnh = true;

    if(idade >= 18 && cnh == true) {
        console.log(`Permitido dirigir`)
    }else if (idade >= 18 && cnh == false) {
        console.log(`Voce nao possui CNH`); 
    } else {
        console.log(`Nao esta permitido dirigir ainda!`);
        }
*/

/* 12)
    let number = 0;
    while (number <= 10) {
        console.log(`O number vale: ${number}`);
        number = number + 1;
    }
*/

/* 13)
    for (i = 100; i >= 50; i = i - 1) {
        console.log(`Valor de i: ${i}`);
    }
*/

/* 14)
    for (a = 0; a <= 50; a++ ) {
        if(a % 2 == 0) {
            console.log(`Este numero e par: ${a}`);
        } else {
            console.log(`Este numero e impar: ${a}`);
            }
    }
*/

/* 15)
    let num = 41;
    let divisoes = 0;

    for( let i = 1; i <= num; i ++) {
        if (num % i == 0) {
        divisoes++;
        }
    }

    if (divisoes == 2) {
        console.log(`Este numero primo: ` + num);
    } else {
        console.log(`Este numero nao e primo: ` + num);
        }
*/