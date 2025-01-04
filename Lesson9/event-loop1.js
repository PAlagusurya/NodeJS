const fs = require("fs");

setImmediate(() => console.log("Executed immediately"));

// NOTE: Event loop waits near poll so check phase executes before timer as it won't start the cycle from the start
fs.readFile("./File.txt", () => {
  console.log("Started Reading successfully");
  setTimeout(() => {
    console.log("Inner timeout");
  }, 0);
  setImmediate(() => console.log("Inner Immediate"));
  console.log("Ended Reading successfully");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

Promise.resolve("Resolved").then(() =>
  console.log("Resolving promise successfully")
);

process.nextTick(() => console.log("Resolved Next Tick"));

console.log("End of the file");
