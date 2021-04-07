const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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