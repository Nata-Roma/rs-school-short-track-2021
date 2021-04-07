/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const counter1 = {};
  const counter2 = {};
  const counter3 = {};
  s1.split('').sort().forEach((q) => {
    if (q in counter1) {
      counter1[q]++;
    } else {
      counter1[q] = 1;
    }
  });

  s2.split('').sort().forEach((q) => {
    if (q in counter2) {
      counter2[q]++;
    } else {
      counter2[q] = 1;
    }
  });

  Object.keys(counter1).forEach((key) => {
    if (key in counter2) {
      counter3[key] = Math.min(counter1[key], counter2[key]);
    }
  });
  let count = 0;
  Object.keys(counter3).forEach((key) => {
    count += counter3[key];
  });

  return count;
}

module.exports = getCommonCharacterCount;
