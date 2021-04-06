const animation = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
let time = 100;

for (let value of animation) {
  setTimeout(() => {
    process.stdout.write(value);
  }, time, time += 200);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1200);



