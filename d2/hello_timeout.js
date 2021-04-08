const timeOut = (string) => {
  let newString = string.split(" ");
  console.log(newString);

  for (let word of newString) {
    setTimeout(() => {
      console.log(word);
    }, 1000);
  }

};

timeOut('4311o th3r3 w0r1d');