const encrypt = function(plaintext, key) {
  let newString = '';
  for (let index in plaintext) {
    if (plaintext[index] !== ' ') {
      let code = plaintext.charCodeAt(index) + key;
      if (code > 122) {
        code -= 26;
      } else if (code < 97) {
        code += 26;
      }
      newString += String.fromCharCode(code);
    } else {
      newString += plaintext[index];
    }
  }

  return newString;
};

module.exports = {encrypt};


