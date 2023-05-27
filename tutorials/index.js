const http = require("http");
const port = 8081;
const Jupiter = require("./hello-jupiter")
const Mars = require("./hello-mars")
const World = require("./hello-world")
const Venus = require("./hello-venus")

const jupiter = new Jupiter("jordan")
const mars = new Mars("jordan")
const world = new World("jordan")
const venus = new Venus("jordan")

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain-text");
  res.end(`
    ${jupiter.hello()}\n
    ${mars.hello()}\n
    ${world.hello()}\n
    ${venus.hello()}\n
  `);
});

server.listen(port, (err) => {
  if (err) {
    console.log("couln't start server on port " + port);
  } else {
    console.log(`Server started on port ${port}`);
  }
});
