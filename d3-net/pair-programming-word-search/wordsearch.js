const wordSearch = (letters, word) => {
  if (letters === undefined || word === undefined || letters.length < 1) {
    return false;
  }

  // join words vertically
  // transpose letters nested array
  const transpose = function(matrix) {
    // Put your solution here
    // make new array
    // push transposed contents of original array into new array
    let newArr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newArr.push([]); // turns row length into column length
      for (let j = 0; j < matrix.length; j++) { // accessing all elements of original array
        newArr[i].push(matrix[j][i]); // push opposite indexes into nested array
      }
    }
    return newArr;
  };

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));


  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }


  return false;
};

module.exports = wordSearch;

