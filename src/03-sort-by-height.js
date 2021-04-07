/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrOne = [];
  arr.forEach((el, i) => {
    if (el === -1) {
      arrOne.push(i);
    }
  });
  let arrNum = arr.filter((el) => el !== -1).sort((a, b) => a - b);

  arrOne.forEach((el) => {
    arrNum = arrNum.slice(0, el).concat(-1).concat(arrNum.slice(el));
  });
  return arrNum;
}

module.exports = sortByHeight;
