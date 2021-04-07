/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /(@[a-z0-9_-]+(\.[a-z0-9_-]+))$/;
  const i = email.match(regex).index;

  return email.substring(i + 1);
}

module.exports = getEmailDomain;
