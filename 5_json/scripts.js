// .JSON
let pessoa = {
    "nome": "Gabriel",
    "idade": 28
}

console.log(pessoa.nome);
console.log(pessoa.idade);

// convertendo JSON para string
let pessoa = {
    "nome": "Gabriel",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Video Games", "Futebol"]
}

let pessoaTexto = JSON.stringify(pessoa); // converte o JSON em uma string 
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto); // converte a string em JSON
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);