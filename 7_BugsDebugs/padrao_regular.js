// Padroes Regulares (regex)
console.log(/testando/.test("ttttttestandoooooo"));
console.log(/testando/.test("asdfghhjkk"));

// Procuro o padrao que selecionei no meio do meu dado

const reg1 = new RegExp("bola"); // -> coloquei a expressao dentro da minha variavel
console.log(reg1.test("tem bola"));
console.log(reg1.test("nao tem"));

const reg2 = /bola/;
console.log(reg1.test("tem bola"));
console.log(reg1.test("nao tem"));