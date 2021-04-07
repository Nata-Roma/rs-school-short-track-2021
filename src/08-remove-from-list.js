/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }
  let current = l;
  const prev = [];

  while (current) {
    if (current.value === k) {
      current = current.next;
    } else {
      prev.push(current.value);
      current = current.next;
    }
  }
  const list = convertArrayToList(prev);
  return list;
}

module.exports = removeKFromList;
