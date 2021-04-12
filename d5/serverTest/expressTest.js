// Load HTTP Module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.StatusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n');
});

//Listen for request on port 3000, and as a callback function have the post listened to logged
server.listen(port, hostname, () => [
  console.log(`Server running at http://${hostname}:${port}/`)
]);