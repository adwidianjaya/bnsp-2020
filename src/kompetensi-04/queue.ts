// queue.ts
/**
 * Queue module. Linear time performance.
 * @packageDocumentation
 */

/**
 * Queue class definition.
 */
class queue {
  /**
   * Hold queue data.
   */
  private queue: any[];

  /**
   * Initialize queue.
   *
   * @param a - The first input number.
   * @param b - The second input number.
   * @param c - The third input number, and so on...
   */
  constructor(...items) {
    this.queue = [...items];
  }

  /**
   * Insert item to the queue.
   *
   * @param a - The first input number.
   * @param b - The second input number.
   * @param c - The third input number, and so on...
   */
  enqueue = (...items): void => {
    this.queue.unshift(...items);
  };

  /**
   * Get item from the queue
   *
   * @returns The first item on the top of the queue.
   */
  dequeue = (): any => {
    return this.queue.pop();
  };

  /**
   * Returns queue length.
   *
   * @returns The length of current queue.
   */
  getLength = (): number => {
    return this.queue.length;
  };
}

export default queue;
