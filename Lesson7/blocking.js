const crypto = require("crypto");

console.log("Let us understand Blocking and Non Blocking I/O operation");
//pbkdf2Sync - Password-Based Key Derivation Function 2

crypto.pbkdf2Sync("password123", "secretsallt", 50000, 10, "sha512");
console.log("Key generated synchronously!!");

setTimeout(() => {
  console.log("Execute it as ASAP");
}, 0);

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(100, 23637);
console.log("Value of a*b = ", c);

crypto.pbkdf2("password123", "secretsallt", 50000, 10, "sha512", (err, key) => {
  console.log("KEY GENERATED ASYNCHRONOUSLY");
});
