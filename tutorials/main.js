const http = require("http");
const port = 8081;


  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain-text");
    res.end("hello world!");
  });

  server.listen(port, () => {
    console.log("Server started on port " + port);
  });
