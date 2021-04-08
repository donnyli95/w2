const stdin = process.stdin;
// setup work
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// event handling for user input

// on any input from stdin, out a '.' to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }
});

console.log('after callback');