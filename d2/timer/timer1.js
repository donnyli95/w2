const times = process.argv.slice(2);

if (times.length > 0) {
  for (let value of times) {
    if (value > 0 &&  Number.isInteger(Number(value))) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, value * 1000);
    }
  }
}

