
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
const array = [];
for (i = 0; i < matrix.length; i++) {
  for (y = 0; y < matrix[i].length; y++) {
    if (!(i % 2 === 0)) {
    matrix[i].sort( (a, b) => b - a );
    }
    array.push(matrix[i][y])
    }
}
return array;

}}

