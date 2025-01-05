const crypto = require("crypto");

/**By default, process.env.UV_THREADPOOL_SIZE is set to 4, which is used for handling heavy blocking operations.
 *  However, it can be increased based on the specific requirements to optimize performance. */

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("123", "salt", 2300000, 13, "sha512", () => {
  console.log("1-Executed");
});

crypto.pbkdf2("123", "salt", 2300000, 13, "sha512", () => {
  console.log("2-Executed");
});

crypto.pbkdf2("123", "salt", 2300000, 13, "sha512", () => {
  console.log("3-Executed");
});

crypto.pbkdf2("123", "salt", 2300000, 13, "sha512", () => {
  console.log("4-Executed");
});
