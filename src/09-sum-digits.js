/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

const req = (qq) => {
  const arr = qq.toString().split('').map((el) => parseInt(el, 10));
  const ww = arr.reduce((acc, curr) => acc + curr, 0);
  if (ww < 10) {
    return ww;
  }
  return req(ww);
};

function getSumOfDigits(n) {
  return req(n);
}

// getSumOfDigits(88);

module.exports = getSumOfDigits;
