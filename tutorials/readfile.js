const http = require("http");
const fs = require("fs");
const port = 8081;

fs.readFile("./input.txt", (err, text) => {
  if (err) {
    throw err;
  }
  
  const server = http.createServer((req, res) => {
    console.log(text)
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain-text");
    res.write(text);
    res.end();
  });

  server.listen(port, (err) => {
    if (err) {
      console.log("couln't start server on port " + port);
    } else {
      console.log(`Server started on port ${port}`);
    }
  });
});
