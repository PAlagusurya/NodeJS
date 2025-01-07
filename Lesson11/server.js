const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getData") {
    res.end("Data is not sent to all the requested users!");
  }
  res.end("Hello Alagusurya!");
});

server.listen("8888");
