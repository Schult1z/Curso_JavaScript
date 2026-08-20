// Negacao (^)

const notAB = /[^ab]/;
console.log(notAB.test("a"));
console.log(notAB.test("aasdf"));

const notAZ = /[^a-z]/;
console.log(notAZ.test("asdfhghj"));
