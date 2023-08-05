const { createServer } = require("http");
const port = 3001;

function router(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello</h1>");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Not Found</h1>");
      break;
  }
  res.end();
}

const server = createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.info("Could not establish a connection to the server");
    console.error(err.message);
  }
  console.info(`> Ready On http://localhost:${port}`);
});
