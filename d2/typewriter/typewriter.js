const sentence = "hello there from lighthouse labs";

let time = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time, time += 50);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 50 * sentence.length);


