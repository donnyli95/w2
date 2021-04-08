const net = require('net');

// create connection
const conn = net.createConnection({
  host: 'example.edu',
  port: 80
});

conn.setEncoding('UTF8');

// make request once connect
conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write('GET / HTTP/1.1\r\n');
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});

// get respone 
conn.on('data', (data) => {
  console.log(data);
  conn.end();
});