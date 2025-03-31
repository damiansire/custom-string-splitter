/**
 * @typedef {TestCase[]} TestCases
 */
export type TestCases = TestCase[];

/**
 * @typedef {Object} TestCase
 * @property {string} input - The input string for the test.
 * @property {string[]} expectedOutput - The array of strings expected as output.
 */
export interface TestCase {
  input: string;
  expectedOutput: string[];
}
