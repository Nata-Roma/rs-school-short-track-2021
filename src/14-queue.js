const ListNode = require('../extensions/list-node');
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

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (!this.head) {
      this.head = new ListNode(element);
      this.head.value = element;
      this.head.next = new ListNode(element);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(element);
      current.value = element;
    }
  }

  dequeue() {
    let current = this.head;
    const element = current.value;
    current = current.next;
    this.head = current;
    return element;
  }
}

module.exports = Queue;
