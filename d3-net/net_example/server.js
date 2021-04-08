const net = require('net');

const server = net.createServer();

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});

server.listen(3000, () => {
  console.log('Server listening on poort 3000!');
});