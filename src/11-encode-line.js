/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === result[result.length - 1]) {
      if (result.length <= 1) {
        result.unshift(2);
      } else if (typeof result[result.length - 2] === 'number') {
        result[result.length - 2]++;
      } else {
        result = result.slice(0, [result.length - 1]).concat(2,
          result.slice([result.length - 1]));
      }
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}

module.exports = encodeLine;
