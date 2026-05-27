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

/*  16)
    function imprimir() {
        console.log(`Ola. Mundo`);
    }
    imprimir();
*/

/* 17)
    function idade(idade) {
        console.log(`Voce tem ${idade} anos !`);
    }
    idade(18);
*/

/* 18)
    function soma(a, b) {
        return a + b;
    }
    console.log(soma(5,4));
    console.log(soma(30,10));
*/

/* 19) Math.random();
    function numeroAleatorio(num) {
        return Math.floor(Math.random() * num) + 1; // Math.floor para arredondar o numero, +1 para ele arredondar corretamente
    }

    console.log(numeroAleatorio(10));
    //num e o numero limite, nao passa disso
*/

/* 20)
    function year(idade) {
        if(idade >= 18) {
            console.log(`Voce pode entrar na Auto-Escola!`)
        } else if (idade < 18) {
            console.log(`Voce ainda nao tem idade soficiente para entrar na auto escola!!`) 
        }
    }
    year(20);
    year(11);
*/

/* 21)
    function detectarTipo(x) {
    console.log(typeof x);
    if(x == typeof string){
        console.log(`O tipo do ${x} e uma String`)
    } else if (x == typeof number) {
        console.log(`O tipo do ${x} e uma number`) 
    } else if (x == typeof boolean) {
        console.log(`O tipo do ${x} e um Boolean`); 
    }
    }
    detectarTipo(7);
    detectarTipo(`Gabriel`);
    detectarTipo(true);
*/

/* 22)
    function numPositivo (numNegativo) {
        return Math.abs(numNegativo);
    }

    console.log(numPositivo(-13));
    
*/
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

/*  16)
    function imprimir() {
        console.log(`Ola. Mundo`);
    }
    imprimir();
*/

/* 17)
    function idade(idade) {
        console.log(`Voce tem ${idade} anos !`);
    }
    idade(18);
*/

/* 18)
    function soma(a, b) {
        return a + b;
    }
    console.log(soma(5,4));
    console.log(soma(30,10));
*/

/* 19) Math.random();
    function numeroAleatorio(num) {
        return Math.floor(Math.random() * num) + 1; // Math.floor para arredondar o numero, +1 para ele arredondar corretamente
    }

    console.log(numeroAleatorio(10));
    //num e o numero limite, nao passa disso
*/

/* 20)
    function year(idade) {
        if(idade >= 18) {
            console.log(`Voce pode entrar na Auto-Escola!`)
        } else if (idade < 18) {
            console.log(`Voce ainda nao tem idade soficiente para entrar na auto escola!!`) 
        }
    }
    year(20);
    year(11);
*/

/* 21)
    function detectarTipo(x) {
    console.log(typeof x);
    if(x == typeof string){
        console.log(`O tipo do ${x} e uma String`)
    } else if (x == typeof number) {
        console.log(`O tipo do ${x} e uma number`) 
    } else if (x == typeof boolean) {
        console.log(`O tipo do ${x} e um Boolean`); 
    }
    }
    detectarTipo(7);
    detectarTipo(`Gabriel`);
    detectarTipo(true);
*/

/* 22)
    function numPositivo (numNegativo) {
        return Math.abs(numNegativo);
    }

    console.log(numPositivo(-13));
    console.log(numPositivo(5));
    console.log(numPositivo(-10.3));
    
*/

/* 23)
    function checar(texto) {
    if (texto.length > 10) {
        console.log(`Texto muito longo`);
    } else {
        console.log(`Texto dentro do limite`);
        }
    }
    checar(`oi`);
    checar(`meu nome e gabriel`);
*/

/*24
    function potencia (x,y) {
        return x **y; // posso usar tambem Math.pow 
    }

    console.log(potencia(20,2));
*/

/* 25)
    function numPar(num) {
        for(let i = num; i >= 0; i--) {
            if(i % 2 == 0) {
             console.log(`Numero par! ${i}`);
            }   
        }
    }
    numPar(8);
    numPar(50);
*/