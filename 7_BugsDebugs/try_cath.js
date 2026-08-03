//  Try e catch
// podemos usar para verificar

try {
  let c = a + b;
} catch (error) {
  console.log("Algo deu errado: " + error); // throw new Error(error)
}

console.log("Fim!");
