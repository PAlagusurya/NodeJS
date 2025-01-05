const fs = require("fs");
const https = require("https");

var a = 10000;
var b = 43334;

console.log("Welcome to NodeJS");

https.get("https://dummyjson.com/products", () =>
  console.log("Fetched the data successfully!")
);

setTimeout(() => {
  console.log("Printed after 5s");
}, 5000);

function multiply(a, b) {
  const result = a * b;
  return result;
}

//Automatically gets the file content as a string instead of a Buffer
fs.readFile("./File.txt", "utf-8", (error, data) => {
  console.log(data);
});

var c = multiply(a, b);
console.log("Value of a*b = ", c);
