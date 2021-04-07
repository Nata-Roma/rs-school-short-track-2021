/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const regex1 = /\.[0-9a-z]{1,5}$/;

  for (let i = 0; i < domains.length; i++) {
    const extension = domains[i].match(regex1);
    const domain = domains[i].substring(0, domains[i].length - extension[0].length).split('.').reverse();
    const single = extension[0].concat('.', domain[0]);
    let double = '';
    if (domain[1]) {
      double = extension[0].concat('.', domain.join('.'));
    }
    if (obj[extension[0]] > 0) {
      obj[extension[0]]++;
    } else {
      obj[extension[0]] = 1;
    }
    if (obj[single] > 0) {
      obj[single]++;
    } else {
      obj[single] = 1;
    }
    if (obj[double] > 0) {
      obj[double]++;
    } else if (double) {
      obj[double] = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
