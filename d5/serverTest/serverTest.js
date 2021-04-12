const http = require('http');
const server = http.createServer(((request, response) => {
  
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  
  response.end("Hello World/n");
}));

server.listen(7000);

const request = require("request");
	request("http://www.google.com",function(error,response,body)
	{
		console.log(body);
	});