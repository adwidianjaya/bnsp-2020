// linked-list.ts
/**
 * Linked List module. Linear time performance.
 * @packageDocumentation
 */

/**
 * Linked List Node class definition.
 */
class Node {
  /**
   * Node value.
   */
  public value: any;

  /**
   * Link to next node.
   */
  public next: any;

  /**
   * Link to previous node.
   */
  public prev: any;

  /**
   * Initialize node.
   *
   * @param value - Node value.
   * @param next - Link to next node.
   * @param prev - Link to previouse node.
   */
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * Linked List class definition.
 */
class LinkedList {
  /**
   * Link to head node.
   */
  public head: any;

  /**
   * Link to tail node.
   */
  public tail: any;

  /**
   * Initialize node.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Addd head node.
   *
   * @param value - Value to saved in Linked List Node and set to head of the Linked List.
   */
  addToHead(value): void {
    const node = new Node(value, null, this.head);
    if (this.head) this.head.next = node;
    else this.tail = node;
    this.head = node;
  }

  /**
   * Add tail node.
   *
   * @param value - Value to saved in Linked List Node and set to tail of the Linked List.
   */
  addToTail(value): void {
    const node = new Node(value, this.tail, null);
    if (this.tail) this.tail.prev = node;
    else this.head = node;
    this.tail = node;
  }

  /**
   * Remove head node.
   *
   * @return Value of the Linked List Head.
   */
  removeHead(): any {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.prev;
    if (this.head) this.head.next = null;
    else this.tail = null;
    return value;
  }

  /**
   * Remove tail node.
   *
   * @return Value of the Linked List Tail.
   */
  removeTail(): any {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.next;
    if (this.tail) this.tail.prev = null;
    else this.head = null;
    return value;
  }

  /**
   * Search value inside the Linked List.
   *
   * @param value - Value for search keyword.
   * @return Value if found, null otherwise.
   */
  search(value): any {
    let current = this.head;
    while (current) {
      if (current.value === value) return value;
      current = current.prev;
    }
    return null;
  }

  /**
   * Find index of value inside the Linked List.
   *
   * @param value - Value for index search keyword.
   * @return Index if found, null otherwise.
   */
  indexOf(value): any[] {
    const indexes = [];
    let current = this.tail;
    let index = 0;
    while (current) {
      if (current.value === value) indexes.push(index);
      current = current.next;
      index++;
    }
    return indexes;
  }
}

export default LinkedList;
