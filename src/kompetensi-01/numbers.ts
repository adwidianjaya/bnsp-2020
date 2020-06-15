// numbers.ts
/**
 * Numbers module provide several useful arithmetic functions.
 * @packageDocumentation
 */

/**
 * Returns the sum of two numbers.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The arithmetic sum of `a` and `b`
 */
export const sum = (a: number, b: number): number => {
  return a + b;
};

/**
 * Returns the difference of two numbers.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The arithmetic subtraction of `a` by `b`
 */
export const diff = (a: number, b: number): number => {
  return a - b;
};

/**
 * Returns the absolute difference of two numbers.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The absolute value of arithmetic subtraction of `a` by `b`
 */
export const absoluteDiff = (a: number, b: number): number => {
  return Math.abs(a - b);
};
