const fs = require("fs");

setImmediate(() => console.log("Executed immediately"));

fs.readFile("./File.txt", "utf-8", (err, data) =>
  console.log("Read File content")
);

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

Promise.resolve("Success").then(() => console.log("resolved"));

process.nextTick(() => {
  console.log("Started Reading successfully");
  process.nextTick(() =>
    Promise.resolve("Success Inside").then(() => console.log("resolved inside"))
  );
  setTimeout(() => console.log("Inner timeout"), 0);
  setImmediate(() => console.log("Inner Immediate"));
  console.log("Ended Reading successfully");
});

console.log("End of the file");
