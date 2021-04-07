/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.slice(0, i * 1) + str.slice(i + 1));
  }
  arr = arr.map((el) => +el);
  return Math.max(...arr);
}

module.exports = deleteDigit;
