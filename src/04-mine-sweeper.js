/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push([...matrix[i]]);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        switch (i) {
          case 0:
            switch (j) {
              case 0:
                arr[i][j + 1]++;
                arr[i + 1][j + 1]++;
                arr[i + 1][j]++;
                break;
              case arr[i].length - 1:
                arr[i][j - 1]++;
                arr[i + 1][j - 1]++;
                arr[i + 1][j]++;
                break;
              default:
                arr[i][j - 1]++;
                arr[i + 1][j - 1]++;
                arr[i + 1][j]++;
                arr[i + 1][j + 1]++;
                arr[i][j + 1]++;
                break;
            }
            break;
          case arr.length - 1:
            switch (j) {
              case 0:
                arr[i - 1][j]++;
                arr[i - 1][j + 1]++;
                arr[i][j + 1]++;
                break;
              case arr[i].length - 1:
                arr[i - 1][j]++;
                arr[i - 1][j - 1]++;
                arr[i][j - 1]++;
                break;
              default:
                arr[i][j - 1]++;
                arr[i - 1][j - 1]++;
                arr[i - 1][j]++;
                arr[i - 1][j + 1]++;
                arr[i][j + 1]++;
                break;
            }
            break;
          default:
            switch (j) {
              case 0:
                arr[i - 1][j]++;
                arr[i - 1][j + 1]++;
                arr[i][j + 1]++;
                arr[i + 1][j + 1]++;
                arr[i + 1][j]++;
                break;
              case arr[i].length - 1:
                arr[i - 1][j]++;
                arr[i - 1][j - 1]++;
                arr[i - 1][j - 1]++;
                arr[i + 1][j - 1]++;
                arr[i + 1][j]++;
                break;
              default:
                arr[i - 1][j - 1]++;
                arr[i - 1][j]++;
                arr[i - 1][j + 1]++;
                arr[i][j + 1]++;
                arr[i + 1][j + 1]++;
                arr[i + 1][j]++;
                arr[i + 1][j - 1]++;
                arr[i][j - 1]++;
                break;
            }
            break;
        }
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
