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

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       // console.dir(`node: ${node}, acc: ${acc}, cur: ${cur}`);

//       console.log('node ', 'cur ', 'acc ');
//       console.log(node);
//       console.log(cur);
//       console.log(acc);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// const list = convertArrayToList([3, 1, 2, 3, 4, 5]);

// console.log(list);

function removeKFromList(/* l, k */) {
  //   // ListNode {
  //   //   value: 3,
  //   //   next: ListNode { value: 1, next: ListNode { value: 2, next: [ListNode] } }
  //   // }
  //   console.log(`l: ${l}, k: ${k}`);
  //   const arr = l.filter((el) => el !== k);
  //   // console.log(arr);
  //   return arr;
}
// removeKFromList([3, 1, 2, 3, 4, 5], 3);

module.exports = removeKFromList;
