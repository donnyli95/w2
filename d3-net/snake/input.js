// Stores the active TCP connection object.
let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handling ctrl + c from user
  handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }

      if (key === 'w') {
        conn.write('Move: up');
      }

      if (key === 'a') {
        conn.write('Move: left');
      }

      if (key === 's') {
        conn.write('Move: down');
      }

      if (key === 'd') {
        conn.write('Move: right');
      }

      if (key === 'g') {
        conn.write('Say: gg');
      }

      if (key === 'e') {
        conn.write('Say: ez');
      }

      if (key === 'h') {
        conn.write('Say: hehe');
      }
    });
  }

  handleUserInput();
  
  return stdin;
}

module.exports = { setupInput };