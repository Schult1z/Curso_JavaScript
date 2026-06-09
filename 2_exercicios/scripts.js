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

/* 26)
    let arr = [1,2,3,4,5,6,7,8];
    console.log(arr[0]);
    console.log(arr[2]);
    console.log(arr[3]);
*/

/* 27)
    let arr1 = [1,2];
    let arr2 = [3,4,5,6];

    console.log(arr1.length);
    console.log(arr2.length);
*/

/* 28)
    let onibus = {
        rodas: 8,
        limitePassageiro: 40,
        portas: 2,
    }
    console.log(onibus.rodas);
    console.log(onibus.limitePassageiro);
    console.log(onibus.portas);
*/

/* 29)
        let onibus = {
        rodas: 8,
        limitePassageiro: 40,
        portas: 2,
    }
    onibus.janelas = 20;
    delete onibus.rodas;
    console.log(onibus.janelas);
    console.log(onibus.rodas);
*/

/* 30)
    let names = ["Gabriel", "Ricardo", "Joao", "Arthur", "Eros"];
    if(names.includes("Gabriel")) {
        console.log(`Nome encontrado!`)
    }
*/

/* 31)
    let nums = [1,2,3,4,5,6,7];
    let nums2 = [1,2,3,4];
    
    function verificarArray(arr) {
        if(arr.length >= 5) {
            console.log("Muitos elementos!");
        } else {
            console.log("Poucos elementos");
            }
    }
    verificarArray(nums);
    verificarArray(nums2);
*/

/* 32)
    let frutas = [`Maca`, `Banana`,`Mamao`,`Melancia`,`Laranja`];

    for(let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
*/

/* 33)
    let aluno = {
        "nome": "Gabriel",
        "idade": 20, 
        "sobreNome": "Schultz",
    }

    console.log(aluno.nome);
    console.log(aluno.idade);
    console.log(aluno.sobreNome);
*/

/* 34)
    const frase = "Ser programador requer muita pratica";

    const arrFrase = frase.split(" ");

    for(let i = 0; i < arrFrase.length; i++) {
        console.log(arrFrase[i]);
    }
*/

/* 35)
    const calculadora = {
    somar(a,b){
        return a + b;
    },
    subtrair(a,b) {
        return a - b;
    },
    dividir(a,b) {
        return a / b;
    },
    multiplicar(a,b) {
        return a * b;
    },
    }

    console.log(calculadora.somar(10,30))
    console.log(calculadora.subtrair(10,30))
    console.log(calculadora.dividir(10,30))
    console.log(calculadora.multiplicar(10,30))
*/

/* 36)
    class Conta {
        constructor(saldo) {
            this.saldo = saldo;
        }
        deposito(valor) {
            this.saldo += valor; 
        }
        saque(valor) {
            this.saldo -= valor;
        }
    }

    let conta = new Conta(1000);
    conta.deposito(1000);
    console.log(conta.saldo);
    conta.saque(500);
    console.log(conta.saldo);
*/

/* 37)
    class Carrinho {
        constructor(itens, qtd, valorTotal){
            this.itens = itens;
            this.qtd = qtd;
            this.valorTotal = valorTotal;
        }
        addItem(item) {

            let contador = 0;
            for(let itemCarrinho in this.itens) {
                if(this.itens[itemCarrinho].id == item.id) {
                 this.itens[itemCarrinho].qtd += item.qtd;
                 contador = 1;
                }
            }

            if(contador == 0) {
                this.itens.push(item);
            }
            this.qtd += item.qtd;
            this.valorTotal += item.preco * item.qtd;
        }
        
        removeItem(item) {
            for(let itemCarrinho in this.itens) {
                if(this.itens[itemCarrinho].id == item.id) {
                    let obj = this.itens[itemCarrinho];
                    let index = this.index.findIndex(function(obj) {return obj.id == item.id});

                    this.qtd -= this.itens[itemCarrinho] .qtd;
                    this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                    this.itens.splice(index, 1);
                }
            }
        }
    }
    let carrinho = new Carrinho ([
    {
        id: 01,
        nome: `Camisa`,
        qtd: 1,
        preco: 20,
    },
    {
        id: 02,
        nome: `Calca`,
        qtd: 2,
        preco: 50,
    }
    ],3, 120);

    console.log(carrinho);
    carrinho.addItem ({id:01, nome:`Camisa`, qtd: 2, preco: 20});

    console.log(carrinho);

    carrinho.addItem ({id:03, nome `Bone`, qtd: 1, preco: 15});
    console.log(carrinho);
*/

/* 38)
    class Endereco {
        constructor(rua, bairro, cidade, estado) {
            this.rua = rua;
            this.bairro = bairro;
            this.cidade = cidade;
            this.estado = estado;
        }
        set novaRua(novaRua) {
            this.rua = novaRua;
        }

        set novoBauirro(novoBairro) {
            this.bairro = novoBairro;
        }
        
        set novaCidade(novaCidade) {
            this.cidade = novaCidade;
        }

        set novoEstado(novoEstado) {
            this.estado = novoEstado;
        }
    }

    let endereco = new Endereco(`Rua peru`, `Bacacheri`, `Curitiba`, `PR`);
    console.log(endereco);

    endereco.novaRua = `Rua peru 213`;
    console.log(endereco.rua);
*/

/* 39)
    class Carro {
        constructor(marca, cor, gasolinaRestante, consumo) {
            this.marca = marca;
            this.cor = cor;
            this.gasolinaRestante = gasolinaRestante;
            this.consumo = consumo;
        }

        dirigir(km) {
            let litrosConsumidos = km / this.consumo;
            this. gasolinaRestante -= litrosConsumidos;
        }

        abastecer(l) {
            this.gasolinaRestante = this.gasolinaRestante + l;
        }
    }

    let porshe = new Carro (`Porshe`, `Roxo Metalico`, 200, 19);
    console.log(porshe);

    porshe.dirigir(112);
    console.log(porshe);

    porshe.abastecer(10);
    porshe.gasolinaRestente;
*/

/* 40)
    class Conta {
        constructor(saldoCC, saldoCP, juros) {
            this.saldoCC = saldoCC;
            this.saldoCP = saldoCP;
            this.juros = juros;
        }

        deposito(valor) {
            this.saldoCC += valor;
        }

        saque(valor) {
            this.saldoCC -= valor;
        }

        transferenciaCP(valor) {
            this.saldoCC -= valor;
            this.saldoCP += valor;
        }

        transferenciaCC(valor) {
            this.saldoCP -= valor;
            this.saldoCC += valor;
        }

        jurosAniversario() {
            let juros = (this.saldoCP * this.juros) / 100;
            this.saldoCP += juros;
        }
    }

    class ContaEspecial extends Conta {
        constructor (saldoCC, saldoCP, juros){
            super(saldoCC, saldoCP, juros*2)
        }
    }

    let contaNova = new Conta (1000, 5000, 1);
    console.log(contaNova);
    contaNova.saque(500);
    console.log(contaNova);
    contaNova.deposito(5000);
    console.log(contaNova);

    contaNova.transferenciaCP(3000);
    console.log(contaNova);

    contaNova.jurosAniversario();
    console.log(contaNova);
    
    let conta2 = new ContaEspecial(10000, 50000, 1);
    console.log(conta2);
    
    conta2.saque(5000);
*/
