// stack.ts
/**
 * Stack module. Linear time performance.
 * @packageDocumentation
 */

/**
 * Stack class definition.
 */
class Stack {
  /**
   * Hold stack data.
   */
  private stack: any[];

  /**
   * Initialize stack.
   *
   * @param a - The first input number.
   * @param b - The second input number.
   * @param c - The third input number, and so on...
   */
  constructor(...items) {
    this.stack = [...items];
  }

  /**
   * Push item to the stack.
   *
   * @param a - The first input number.
   * @param b - The second input number.
   * @param c - The third input number, and so on...
   */
  push = (...items): void => {
    this.stack.push(...items);
  };

  /**
   * Pop item from the stack
   *
   * @returns The first item on the top of the stack.
   */
  pop = (): any => {
    return this.stack.pop();
  };

  /**
   * Returns stack length.
   *
   * @returns The length of current stack.
   */
  getLength = (): number => {
    return this.stack.length;
  };
}

export default Stack;
