const titleCase = (string) => {
  if (string.length < 1) {
    return '';
  } else {
    let newString = string[0].toUpperCase();
    for (let i = 1; i < string.length; i++) {
      if (string[i - 1] === ' ') {
        newString += string[i].toUpperCase();
      } else {
        newString += string[i].toLowerCase();
      }
    }
    return newString;
  }

};


module.exports = titleCase;