// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = null;
    this.queue = [];
  }

  ListNode(x) {
    this.value = x;
    this.next = null;
  }

  convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new this.ListNode(cur);
        node.next = acc;
        return node;
      }
      return new this.ListNode(cur);
    }, null);
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    if (!this.head) {
      this.head = new this.ListNode(element);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new this.ListNode(element);
    }
    console.log(this.head);
    // this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
