const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve().then(() => console.log("Promise reoslved"));

fs.readFile("./File.txt", "utf-8", () => {
  setTimeout(() => console.log("Inner timeout"), 0);
  setImmediate(() => console.log("Inner Immediate"));
  process.nextTick(() => console.log("Inner next Tick"));
  console.log("File Read successfully");
});

process.nextTick(() => console.log("Next Tick"));

console.log("End of the file");
