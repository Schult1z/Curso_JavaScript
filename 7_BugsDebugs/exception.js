function saudacao(nome) {
  if (typeof nome !== "string") {
    throw new Error("O parâmetro nome precisa ser uma string!"); //throw tacar a "Mensagem"
  } else {
    console.log(`Olá, ${nome}`);
  }
}

saudacao("Gabriel");
saudacao(123);

console.log("Fim!")