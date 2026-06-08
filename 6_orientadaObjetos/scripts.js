// Programação Orientada a Objetos
const cachorro = {
    raca: ``,
    latir: function() { // metodo
        console.log(`O cachorro esta latindo!`)
    },
    rosnar: function() {
        console.log(`O cachorro esta rosnando!`)
    },
    setRaca: function(raca) {
        this.raca = raca; // referencia ao objeto 
    },
    getRaca: function() {
        return "A raca e: " + this.raca;
    }
}
cachorro.latir();
cachorro.rosnar();
cachorro.setRaca(`Pastor Alemao`);
console.log(cachorro.raca);
console.log(cachorro.getRaca());

// prototypes
const pessoa = {
    maos: 2,
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos); // herdou a chave e valor do objeto pessoa

// classes
let dog = {
    patas: 4, 
    raca: `SRD`,
    latir: function() {
        console.log(`Au au!`)
    }
}

let labrador = Object.create(dog);
labrador.latir();
labrador.raca = `Labrador`;

console.log(dog.raca);
console.log(labrador.raca);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = `Pastor Alemao`;
console.log(pastorAlemao.raca);

// instancia por funcao
function criaCachorro(raca, patas, cor)  {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log(`Au au!!`);
    }
    return cachorro;
}
let doberman = criaCachorro(`Doberman`, 4, `Preto`);
console.log(doberman);
doberman.latir();

// contrutor por NEW
function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log(`auuu!`);
    }
}

let husky = new Cachorro(`Husky`, 4, `Branco`);
husky.uivar();
console.log(husky.cor);

// metodo prototype
function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
} // DEIXAR OS METODOS FORA DA CLASSE
Cachorro.prototype.uivar = function() {
    console.log(`AUUUUU!`);
}
Cachorro.prototype.late = function() {
    console.log(`Au Au Au!`);
}
let viraLata = new Cachorro(`Vira Lata`, 4, `Caramelo`);
viraLata.uivar();

// contrutor classe (ES6)
class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro(`Labrador`, 4, `Branco`);
console.log(labrador);

// em class nao podemos mais adicionar propriedades, tem que ser adicionado diretamente em seu prototype (a class so aceita metodos)
// class Methods

class Carro {
    constructor (marca, color) {
        this.marca = marca;
        this.color = color;
    }
    acelerar() {
        console.log(`De 0 a 100 em 5 segundos!!`);
    }
}
Carro.prototype.pneu = 4; // setando valor em class (fica meio padronizado)

let porshe = new Carro(`Porshe`, `Roxo metalico`);
console.log(porshe.pneu);
porshe.acelerar();

// Override em Prototype
class Dog {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log(`Au Au !`);
    }
}
Dog.prototype.raca = `SRD`; // como se fosse uma constante padronizada 
Dog.prototype.patas = 4;

let pincher = new Dog(`Pincher`, `Preto`);
console.log(pincher.raca);
console.log(Dog.prototype.raca);

// Symbols (propriedades unicas que nao podem ser alteradas)
class Carro {
    constructor (marca, color) {
        this.marca = marca;
        this.color = color;
    }
    acelerar() {
        console.log(`De 0 a 100 em 5 segundos!!`);
    }
}
let rodas = Symbol();
Carro.prototype[rodas] = 4;

let porshe = new Carro(`Porshe`, `Roxo metalico`);
porshe.acelerar();

// acessando o Symbol()
console.log(Carro.prototype[rodas]);
console.log(porshe[rodas]);

// Getters e Setters 
// Get: serve para resgatar o valor de uma propriedade
// Set: serve para alterar o valor de uma propriedade
class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log(`Au Au !`);
    }

    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}

let pastor = new Cachorro(`Pastor Alemao`, `Sem cor`);
console.log(pastor);

pastor.setCor = `Marrom`;
console.log(pastor.getCor);

// Heranca
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}
let coiote = new Mamifero(4);
console.log(coiote.patas); // 4

class Gato extends Mamifero { // extendeu do mamifero (e uma classe filho do Mamifero)
    constructor(patas,raca) {
        super(patas, patas);
        this.raca = raca;
    }
    latir() {
        console.log(`Au Au`)
    }
}

let rex = new Gato(4, `Vira lata`);
console.log(rex.patas);

// Instanceof Operator (verifica quem o a classe pai)
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}
let coiote = new Mamifero(4);
console.log(coiote.patas); // 4

class Gato extends Mamifero { // extendeu do mamifero (e uma classe filho do Mamifero)
    constructor(patas,raca) {
        super(patas, patas);
        this.raca = raca;
    }
    miar() {
        console.log(`miauuu`);
    }
}

let rex = new Gato(4, `Vira lata`);
console.log(rex.patas);
rex.miar();

console.log(new Gato instanceof Mamifero); // true
console.log(coiote instanceof Mamifero); // true
