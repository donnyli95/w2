const transpose = function(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let arrTwo = [];
    for (let j = 0; j < matrix.length; j++) {
      arrTwo.push(matrix[j][i]);
    }
    newArr.push(arrTwo);
  }

  return newArr;
};


// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};


printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
