const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Handle messages from the server
  conn.on('data', function(data) {
    console.log('Server says: ', data);
    
  });

  // connection successful
  conn.on('connect', (name) => {
    console.log('Successfully connected to game server');
    conn.write('Name: ily');
  });

  return conn;
};

module.exports = { connect };