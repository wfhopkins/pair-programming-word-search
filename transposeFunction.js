const transpose = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let result = [];
  
  for (let col = 0; col < columns; col++) {
    result[col] = [];
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      result[col][row] = matrix[row][col]; 
    }
  }
  return result;
};

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = transpose;


// //TESTS
// printMatrix(
//   transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ])
// );

// console.log("----");

// printMatrix(
//   transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// console.log("----");

// printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

// console.log("----");

// printMatrix(transpose([]));

// console.log("----");